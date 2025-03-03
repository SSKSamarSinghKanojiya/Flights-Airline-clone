const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");

/**
 * POST :/airplane
 */
async function createAirplane(req, res) {
  try {
    // console.log(req.body);
    console.log(`Inside Controllers`);
    
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({
        success: true,
        message: "successfully create an aeroplane",
        data: airplane,
        error: {},
      });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong while creating airplane",
      data: {},
      error: error,
    })
  }
}

module.exports = {createAirplane};
