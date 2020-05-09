import React, { Component} from 'react';
import PropTypes from "prop-types";

 import axios from 'axios';

 const Replay = props => (
    <tr>
        <td>{props.exercise.game}</td>
        <td>{props.exercise.player1}</td>
        <td>{props.exercise.character1}</td>
        <td>{props.exercise.player2}</td>
        <td>{props.exercise.character2}</td>
        <td>{props.exercise.winner}</td>
        <td>
            <a href={props.exercise.link} target="_blank" rel="noopener noreferrer">Link</a>
        </td>
    </tr>
  )

 export default class ReplaysList extends Component {

    static propTypes = {
        location: PropTypes.object.isRequired,
      }

      componentDidMount(){
        const { location } = this.props;
        console.log('http://localhost:5000'+location.pathname)


        axios.get('http://localhost:5000'+location.pathname,{params:{game:'Sfv'}}).then(response => {
            this.setState({
                replays: response.data
            })
        }).catch((error) => {
            console.log(error);
        })
      }

     constructor(props){
         super(props);

         this.state = {
             replays: []
            };
     }

     replayList() {
        return this.state.replays.map(currentreplay => {
          return <Replay exercise={currentreplay} deleteReplay={this.deleteReplay} key={currentreplay._id}/>;
        })
      }

    render(){
         return(
            <div>
                <h3>Results</h3>
                    <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Game</th>
                    <th>Player 1</th>
                    <th>Character 1</th>
                    <th>Player 2</th>
                    <th>Character 2</th>
                    <th>Winner</th>
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