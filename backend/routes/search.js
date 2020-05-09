const router = require('express').Router();
let Replay = require('../models/Replay.model');

router.route('/').get((req,res) => {
    console.log(req.query);
    Replay.find(req.query).then(replays => res.json(replays)).catch(err => res.status(400).json('Error: ' + err));
});

module.exports= router;