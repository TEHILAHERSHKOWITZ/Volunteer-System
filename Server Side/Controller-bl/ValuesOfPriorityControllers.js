const Controller = require("./ControllersBase");
const ValuesOfPriorityService = require('../Service-dal/ValuesOfPriorityService')

class ValuesOfPriorityControllers extends Controller {
    constructor() {
        super(ValuesOfPriorityService)
    }
}

let valuesOfPriorityControllers = new ValuesOfPriorityControllers();
module.exports = valuesOfPriorityControllers;