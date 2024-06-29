const Controller = require("./ControllersBase");
const PlaceService = require('../Service-dal/PlaceService')

class PlaceControllers extends Controller {
    constructor() {
        super(PlaceService)
    }
}

let placeControllers = new PlaceControllers();
module.exports = placeControllers;