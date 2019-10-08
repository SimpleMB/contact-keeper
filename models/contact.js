const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Error text"]
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Contact", contactSchema);
