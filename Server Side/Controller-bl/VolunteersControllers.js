const Controller = require("./ControllersBase");
const VolunteersService = require('../Service-dal/VolunteersService')

class VolunteersControllers extends Controller {
    constructor() {
        super(VolunteersService)
    }
}

let volunteersControllers = new VolunteersControllers();
module.exports = volunteersControllers;