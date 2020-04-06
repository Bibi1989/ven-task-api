const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  country: String,
  car_model: String,
  car_model_year: String,
  car_color: String,
  gender: String,
  job_title: String,
  bio: String,
  date_created: {
    type: Date,
    default: Date.now(),
  },
});

const carModel = mongoose.model("cars", carSchema);

module.exports = carModel;
