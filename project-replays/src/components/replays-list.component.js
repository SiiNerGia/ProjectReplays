 import React, { Component} from 'react';
 //import { Link } from 'react-router-dom';
 import axios from 'axios';

 const Replay = props => (
    <tr>
      <td>{props.exercise.game}</td>
      <td>{props.exercise.player1}</td>
      <td>{props.exercise.character1}</td>
      <td>{props.exercise.player2}</td>
      <td>{props.exercise.character2}</td>
      <td>
         <a href={props.exercise.link} target="_blank" rel="noopener noreferrer">Link</a>
        </td>
      
      
    </tr>
  )

 export default class ReplaysList extends Component {
     constructor(props){
         super(props);

        


         this.state = {
             replays: []
            };
     }

     componentDidMount(){
         axios.get('http://localhost:5000/replays/').then(response => {
             this.setState({
                 replays: response.data
             })
         }).catch((error) => {
             console.log(error);
         })
     }



     replayList() {
        return this.state.replays.map(currentreplay => {
          return <Replay exercise={currentreplay} deleteReplay={this.deleteReplay} key={currentreplay._id}/>;
        })
      }



     render(){
         return(
            <div>
                <h3>Logged Replays</h3>
                    <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Game</th>
                    <th>Player1</th>
                    
                    <th>Character 1</th>
                    <th>Player2</th>
                    <th>Character 2</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    { this.replayList() }
                </tbody>
                </table> 
            </div>
         )
     }
 }