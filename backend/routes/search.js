const router = require('express').Router();
let Replay = require('../models/Replay.model');

router.route('/').get((req,res) => {
    //console.log(req.query);
    let andConds = [];


    if (req.query.game) {
        andConds.push({game: req.query.game})
    }

    if (req.query.player1 || req.query.player2 || req.query.character1 || req.query.character2) {
        let orCondition = [];
        let stAndOrCondition =[];
        let ndAndOrCondition = [];
        if (req.query.player1) {
            stAndOrCondition.push({player1: req.query.player1})
            ndAndOrCondition.push({player2: req.query.player1})
        }

        if (req.query.player2) {
            stAndOrCondition.push({player2: req.query.player2})
            ndAndOrCondition.push({player1: req.query.player2})
        }

        if (req.query.character1) {
            stAndOrCondition.push({character1: req.query.character1})
            ndAndOrCondition.push({character2: req.query.character1})
        }
        if (req.query.character2) {
            stAndOrCondition.push({character2: req.query.character2})
            ndAndOrCondition.push({character1: req.query.character2})
        }
        orCondition.push({$and: stAndOrCondition})
        orCondition.push({$and: ndAndOrCondition})
        andConds.push({$or: orCondition})
        console.log(JSON.stringify(andConds))
    }

   

    //if no conditions exists match all as before.
    Replay.find(andConds.length ? {$and: andConds} : {}).then(replays => res.json(replays)).catch(err => res.status(400).json('Error: ' + err));
});

module.exports= router;



//[{"game":"Tekken 7"},{"$or":[{"player1":"jdcr"},{"player2":"jdcr"}]}]

//ejemplo: encontrar una repeticion en la que el jugador1 sea jdcr con djin, jugador2 knee con steve, de tekken 7
//query seria :    encuentrame las repeticiones en las que el juego sea tekken 7 Y (jugador1: jdcr y personaje1 djin y jugardor2:knee y personaje2:steve) Y en las que
// (jugador1:knee personaje1:steve y jugador2:jdcr y personaje2: djin)

// query:







//    {$and:[ { game: 'Tekken 7' }, { '$or':[ 
 //                                        { $and:[ { "player1":"jdcr"},{"character1":"djin"},{"player2":"knee"},{"character2":"steeve"} ]},
//                                          {$and:[{ "player1":"knee"},{"character1":"steeve"},{"player2":"jdcr"},{"character2":"djin"}] }        
 //                                  ]  
 //                                 }]
 // }


 //QUERY COMPROBADA EN MONGODB -> {$and:[ { game: 'Tekken 7' } ,{$or:[  { $and:[ { "player1":"JDCR"},{"character1":"Heihachi"},{ "player2":"KNEE"},{"character2":"Steve"}          ]},{$and:[{"player2":"JDCR"},{"character2":"Heihachi"},{ "player1":"KNEE"},{"character1":"Steve"}] }  ]}    ]}

//segundo ejemplo, juego tekken 7, jugador 1 jdcr pj 1 djin

// buscame las replays en las que el juego sea tekken7 y jugador1:jdcr y pj1:djin Y jugador2:jdcr y pj2: djin


//query:    

//    {$and:[ { game: 'Tekken 7' }, { '$or':[ 
 //                                        { $and:[ { "player1":"JDCR"},{"character1":"Heihachi"} ]},
//                                          {$and:[{"player2":"JDCR"},{"character2":"Heihachi"}] }        
 //                                  ]  
 //                                 }]
 // }
//QUERY COMPROBADA EN MONGODB -> {$and:[ { game: 'Tekken 7' } ,{$or:[  { $and:[ { "player1":"JDCR"},{"character1":"Heihachi"}         ]},{$and:[{"player2":"JDCR"},{"character2":"Heihachi"}] }  ]}    ]}



 //OTRO EJEMPLO, EL USUARIO SOLO INTRODUCE EL JUEGO Y UN PJ
 //
 //   {$and: { game: 'Tekken 7' }, { '$or':[ 
 //                                        { $and:[ {"character1":"djin"} ]},
//                                          {$and:[ {"character2":"djin"}] }        
 //                                  ]  
 //                                 }
 // }
 //
 //
 //
 //