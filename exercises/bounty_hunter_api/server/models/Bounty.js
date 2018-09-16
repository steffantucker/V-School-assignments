const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  living: {
    type: Boolean,
    required: true
  },
  bountyAmount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    require: true,
    enum: ["Sith", "Jedi"]
  }
});

module.exports = mongoose.model("Bounty", schema);
