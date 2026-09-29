const mongoose = require("mongoose");

const personalityInterestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    personalityResponses: {
      type: [Number],
      default: [],
    },

    interestResponses: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "PersonalityInterest",
  personalityInterestSchema
);