const StatusModel = require('../Models/StatussModel');

class StatusService{

    getAll(queryParameters) {

        let result = StatusModel.find({});
        let find = {}

        if (queryParameters.typeOfStatus) {
            find = result.find({ 'volunteersCode': queryParameters.typeOfStatus })
            if (!(result == 0))
                throw new Error('')
            else
                result = find
        }
        return result;
    }


}
let statusService = new StatusService();
module.exports = statusService;