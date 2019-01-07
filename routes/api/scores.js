const express = require("express");
const router = express.Router();
const Score = require("../../models/Score");
const passport = require("passport");

router.get("/scoreboard", (req, res) => {
  Score.find()
    .sort({ score: -1 })
    .limit(50)
    .then(scores => {
      if (scores) {
        return res.json({ scores: scores });
      }
    });
});

router.get("/currentPlayer/:username", (req, res) => {
  Score.find()
    .sort({ score: -1 })
    .findOne({ username: req.params.username })
    .then(score => {
      if (score) {
        return res.json({ score: score });
      } else {
        return res.status(404).json({ score: -2 });
      }
    });
});

router.post("/createScore", (req, res) => {
  new Score({
    score: req.body.score,
    secondsElapsed: req.body.secondsElapsed,
    username: req.body.username
  })
    .save()
    .then(newScore => {
      res.json(newScore);
    });
});

// router.post("/anonscores", (req, res) => {
//   new Score({
//     score: req.body.score,
//     secondsElapsed: req.body.secondsElapsed,
//     username: req.body.username
//   })
//     .save()
//     .then(newScore => {
//       res.json({ newScore });
//     });
// });

module.exports = router;
