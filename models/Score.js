const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    score: {
      type: Number,
      required: true
    },
    secondsElapsed: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
})

// CLASS
// ScoreSchema.statics.name = function () {
// code here
// }

// INSTANCE
// SCoreSchema.methods.name... 

module.exports = Score = mongoose.model('scores', ScoreSchema);
