const router = require('express').Router();
let Replay = require('../models/Replay.model');

router.route('/').get((req,res) => {
    Replay.find().then(replays => res.json(replays)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);


    const newReplay = new Replay({
        //TODO
        username,
        description,
        duration,
        date,
    });


    newReplay.save().then(() => res.json('Replay added!')).catch(err => res.status(400).json('Error: '+ err));
});


router.route('/:id').get((req,res) => {
    Replay.findById(req.params.id).then(replay => res.json(replay)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Replay.findByIdAndDelete(req.params.id).then(() => res.json('Replay deleted.')).catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
   
Replay.findById(req.params.id).then(replay => {
    replay.username = req.body.username;
    replay.description = req.body.description;
    replay.duration = Number(req.body.duration);
    replay.date = Date.parse(req.body.date);


    replay.save().then(() => res.json('Replay updated!')).catch(err => res.status(400).json('Error: ' + err));
}).catch(err => res.status(400).json('Error: ' + err));
});

module.exports= router;