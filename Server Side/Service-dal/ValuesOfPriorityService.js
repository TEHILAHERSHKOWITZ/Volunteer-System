const ValuesOfPrioritysModel = require('../Models/ValuesOfPrioritysModel');

class ValuesOfPrioritysService{

    getAll(queryParameters) {

        let result = ValuesOfPrioritysModel.find({});
        let find = {}

        if (queryParameters.PriorityCode) {
            find = result.find({ 'volunteersCode': queryParameters.PriorityCode })
            if (!(result == 0))
                throw new Error('')
            else
                result = find
        }
        return result;
    }
}
let valuesOfPrioritysService = new ValuesOfPrioritysService();
module.exports = valuesOfPrioritysService;