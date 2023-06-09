const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const date = require("../utils/date.js");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 128,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        date(timestamp);
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
