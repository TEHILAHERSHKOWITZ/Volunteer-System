const Controller = require("./ControllersBase");
const StatusService = require('../Service-dal/StatusService')

class StatusControllers extends Controller {
    constructor() {
        super(StatusService)
    }
}

let statusControllers = new StatusControllers();
module.exports = statusControllers;