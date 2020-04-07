const express = require("express");
const router = express.Router();
const Cars = require("../models/carsModel");
const json = require("../cars.json");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const noOfLimit = 10;
  const page = parseInt(req.query.page) - 1;
  const limit = noOfLimit * page;

  if (page < 0)
    return res.status(404).json({ error: "Page should not be less than 1" });

  try {
    const cars = await Cars.find().skip(limit).limit(10);
    res.json({ pages: page, limits: noOfLimit, cars });
  } catch (error) {
    next(error);
  }
});

router.post("/query", async (req, res, next) => {
  console.log(req.body.countries);
  const queryData = {
    car_model_year: { $gte: req.body.start_year, $lte: req.body.end_year },
    gender: req.body.gender,
    $or: req.body.countries,
    $or: req.body.colors,
  };

  try {
    let car = await Cars.find(queryData);
    res.json({ car });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
