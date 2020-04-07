// const parse = require("csv-parse");
// const fs = require("fs");
// const Cars = require("./models/carsModel");

// let v = [];

// fs.createReadStream(__dirname + "/car_ownsers_data.csv").pipe(
//   parse({
//     delimiter: ",",
//   })
//     .on("data", (dataRow) => {
//       console.log(dataRow);
//     })
//     .on("end", () => {
//       console.log("csv");
//     })
// );

// module.exports = v;

// router.post("/for", async (_req, res, next) => {
//   try {
//     Cars.create(json, (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       res.json(data);
//     });
//     res.json(a);
//   } catch (error) {
//     next(error);
//   }
// });
