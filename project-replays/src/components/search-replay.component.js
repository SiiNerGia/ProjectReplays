import React, { Component} from 'react';
import axios from 'axios';
//let Replay = require('ProjectReplays/backend/models/Replay.model');



const streetFighterCharacters =['Ryu','Ken','Birdie','Cammy','Chun-Li','Dhalsim','F.A.N.G','Karin','Laura','M.Bison/Dictator','Nash','Necalli','R.Mika','Rashid','Vega/Claw','Zangief','Alex','Balrog/Boxer','Guile',
    'Ibuki','Juri','Urien','Abigail','Akuma/Gouki','Ed','Kolin','Menat','Zeku','Blanka','Cody','Falke','G','Sagat','Sakura','E.Honda','Gill','Kage','Lucia','Poison','Seth'];

const tekken7Characters = ['Heihachi','Kazuya','Lee','Law','Nina','Paul','Yoshimitsu','Bryan','Eddy','Hwoarang','Jin','King','Kuma','Xiaoyu','Panda','Steve','Asuka','Devil Jin','Feng',
'Lili','Dragunov','Bob','Leo','Miguel','Lars','Alisa','Claudio','Katarina','Lucky Chloe','Shaheen','Josie','Gigas','Jack-7','Kazumi','Master Raven','Eliza','Anna','Lei','Julia',
'Marduk','Armor King','Zafina','Ganryu','Leroy','Fahkumram','Akuma','Geese','Noctis','Negan']

export default class CreateReplays extends Component {

    
    constructor(props){
        super(props);

        this.onChangeGame = this.onChangeGame.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangePlayer1 = this.onChangePlayer1.bind(this);
        this.onChangePlayer2 = this.onChangePlayer2.bind(this);
        this.onChangeCharacter1 = this.onChangeCharacter1.bind(this);
        this.onChangeCharacter2 = this.onChangeCharacter2.bind(this);
        this.onChangeWinner = this.onChangeWinner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);





        this.state = {
            games: [],
            game:'',
            link: '',
            player1: '',
            player2: '',
            characters1: [],
            characters2: [],
            character1:'',
            character2:'',
            winner: '',
            replaysQuery: ''
        }
    }



    componentDidMount(){
        this.setState({
            games: ['Street Fighter V','Tekken 7'],
           
         characters1: ['Ryu','Ken','Birdie','Cammy','Chun-Li','Dhalsim','F.A.N.G','Karin','Laura','M.Bison/Dictator','Nash','Necalli','R.Mika','Rashid','Vega/Claw','Zangief','Alex','Balrog/Boxer','Guile',
        'Ibuki','Juri','Urien','Abigail','Akuma/Gouki','Ed','Kolin','Menat','Zeku','Blanka','Cody','Falke','G','Sagat','Sakura','E.Honda','Gill','Kage','Lucia','Poison','Seth'],
           
        characters2: ['Ken','Ryu','Birdie','Cammy','Chun-Li','Dhalsim','F.A.N.G','Karin','Laura','M.Bison/Dictator','Nash','Necalli','R.Mika','Rashid','Vega/Claw','Zangief','Alex','Balrog/Boxer','Guile',
            'Ibuki','Juri','Urien','Abigail','Akuma/Gouki','Ed','Kolin','Menat','Zeku','Blanka','Cody','Falke','G','Sagat','Sakura','E.Honda','Gill','Kage','Lucia','Poison','Seth'],
        
        game:'Sfv',
        character1: 'Ryu',
        character2:'Ken'
        })
    }


    onChangeGame(e){
        if(e.target.value === 'Street Fighter V'){
            this.setState({
                characters1: streetFighterCharacters,
                characters2: streetFighterCharacters,
            })
            
        }else{
            this.setState({
                characters1: tekken7Characters,
                characters2: tekken7Characters,
            })
        }
        this.setState({
            game: e.target.value
        })
       
    }
    onChangeLink(e){
        this.setState({
            link: e.target.value 
        })
    }
    onChangePlayer1(e){
        this.setState({
            player1: e.target.value 
        })
    }
    onChangePlayer2(e){
        this.setState({
            player2: e.target.value
        })
    }

    onChangeCharacter1(e){
        this.setState({
            character1: e.target.value
        })
    }


    onChangeCharacter2(e){
        this.setState({
            character2: e.target.value
        })
    }


    onChangeWinner(e){
        this.setState({
            winner: e.target.value
        })
    }


    onSubmit(e){
        // e.preventDefault();

        // const replay ={
        //     game: this.state.game,
        //     link: this.state.link,
        //     player1: this.state.player1,
        //     player2: this.state.player2,
        //     character1: this.state.character1,
        //     character2 :this.state.character2,
        //     winner: this.state.winner
        // }

        // console.log(JSON.stringify(replay));




        // this.setState({
        //     replaysQuery: Replay.find({game: 'Tekken'})
        // })
       

    
    }

    render(){
        return(
            <div>
            <h3>Search Replay</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Game: </label>
                <select ref="userInput"
                    required
                    className= "from-control"
                    value={this.state.game}
                    onChange={this.onChangeGame}>
                    {
                        this.state.games.map(function(game){
                            return <option
                            key = {game}
                            value={game}>{game}
                            </option>;
                        })
                    }
                    </select>
              </div>
              <div className="form-group"> 
                <label>Youtube Link: </label>
                <input  type="url"
                    pattern="https://www.youtube.com/.+"
                    required
                    className="form-control"
                    value={this.state.link}
                    onChange={this.onChangeLink}
                    />
              </div>
              <div className="form-group"> 
                <label>Player 1: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.player1}
                    onChange={this.onChangePlayer1}
                    />
              </div>
              <div className="form-group"> 
                <label>Player 2: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.player2}
                    onChange={this.onChangePlayer2}
                    />
              </div>
              <div className="form-group">
                <label>Character 1: </label>
                <select ref="userInput"
                    required
                    className= "from-control"
                    value={this.state.character1}
                    onChange={this.onChangeCharacter1}>
                    {
                        this.state.characters1.map(function(character1){
                            return <option
                            key = {character1}
                            value={character1}>{character1}
                            </option>;
                        })
                    }
                    </select>
              </div>
              <div className="form-group">
                <label>Character 2: </label>
                <select ref="userInput"
                    required
                    className= "from-control"
                    value={this.state.character2}
                    onChange={this.onChangeCharacter2}>
                    {
                        this.state.characters2.map(function(character2){
                            return <option
                            key = {character2}
                            value={character2}>{character2}
                            </option>;
                        })
                    }
                    </select>
              </div>
              
      
              <div className="form-group">
                <input type="submit" value="Search replay" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}