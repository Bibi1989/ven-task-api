const express = require("express");
const router = express.Router();

const Cars = require("../models/carsModel");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.find();
    res.json({ cars });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
