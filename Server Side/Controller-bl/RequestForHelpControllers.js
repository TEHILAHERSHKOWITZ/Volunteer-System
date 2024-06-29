const Controller = require("./ControllersBase");
const RequestForHelpService = require('../Service-dal/RequestForHelpService')

class RequestForHelpControllers extends Controller {
    constructor() {
        super(RequestForHelpService)
    }
}

let requestForHelpControllers = new RequestForHelpControllers();
module.exports = requestForHelpControllers;