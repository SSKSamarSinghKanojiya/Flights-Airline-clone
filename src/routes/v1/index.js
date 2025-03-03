const express = require("express");

const { InfoController } = require("../../controller");

const airplaneRoutes = require("./airplane-routes")

const router = express.Router()

console.log(`Inside v1 Routes`);


router.use("/airplanes", airplaneRoutes)

router.get("/info",InfoController.info)


module.exports = router;