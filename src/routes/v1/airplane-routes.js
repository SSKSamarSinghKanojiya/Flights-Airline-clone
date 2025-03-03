const express = require("express");
const { AirplaneController } = require("../../controller");

const router = express.Router();

console.log(`inside Airplane Routes`);

//  /api/v1/airplane POST request
router.post("/", AirplaneController.createAirplane);

module.exports = router;
