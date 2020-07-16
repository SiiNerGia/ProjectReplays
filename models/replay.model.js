const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const replaySchema = new Schema({
    
    game: {type: String, required:true},
    link: {type: String, required:true,unique: true},
    player1: {type: String, required: true},
    player2: {type: String, required: true},
    character1: {type: String, required: true},
    character2: {type: String, required: true},
    winner: {type: String, required: true}
    
},{
    timestamps:true,
});

const Replay = mongoose.model('Replay', replaySchema);

module.exports = Replay;