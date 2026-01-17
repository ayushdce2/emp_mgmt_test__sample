const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttandanceSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    todaysDate: {
      type: String,
      default: null,
    },
    markattendaceStatus: {
      type: String,
      default: null,
    },
    userRole: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const AttandanceModel = mongoose.model("Attandance", AttandanceSchema);

module.exports = AttandanceModel;
