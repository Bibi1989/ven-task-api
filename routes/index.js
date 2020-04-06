const express = require("express");
const router = express.Router();

const Cars = require("../models/carsModel");

/* GET home page. */
router.get("/", async (_req, res, next) => {
  try {
    const cars = await Cars.find();
    res.json({ cars });
  } catch (error) {
    next(error);
  }
});

router.post("/", async function (req, res, next) {
  console.log(req.body);
  let cars = new Cars({
    ...req.body,
  });
  await cars.save();
  res.json({ cars: cars.first_name });
});

module.exports = router;
