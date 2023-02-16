const mongoose = require("mongoose");
const Activity = mongoose.Schema({
  Name: { required: true, type: String },
  Decription: { required: true, type: String },

  Activity: { required: true, type: String },

  Duration: { required: true, type: String },

  Date: { required: true, type: String },
});
module.exports = mongoose.model("Activity", Activity);
