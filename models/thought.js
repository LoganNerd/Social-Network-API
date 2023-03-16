const { Schema, model } = require("mongoose");


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
      
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {

    }

  },
    reactionCount: [
      {
        type: Schema.Types.ReactionId,
        ref: 'reaction'
      },  
    ],
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model("course", courseSchema);

module.exports = Course;
