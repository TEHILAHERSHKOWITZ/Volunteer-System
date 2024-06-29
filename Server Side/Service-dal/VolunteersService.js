const VolunteersModel = require('../Models/VolunteerssModel');

class VolunteersService {

    getAll(queryParameters) {

        let result = VolunteersModel.find({});
        let find = {}

        if (queryParameters.volunteersCode) {
            find = result.find({ 'volunteersCode': queryParameters.volunteersCode })
            if (!(result == 0))
                throw new Error('')
            else
                result = find
        }
        return result;
    }


    async get(code) {
        let foundVolunteer = await VolunteersModel.find({ volunteersCode: code })
        return foundVolunteer
    }

    async insert(newVolunteers) {

        let sameVolunteers = await VolunteersModel.find({ id: newVolunteers.id });
        if (sameVolunteers.length > 0) {
            throw new Error('invalid new volunteers code');
        }
        else {
            VolunteersModel.create(newVolunteers);
            return (newVolunteers);
        }
    }
}
let volunteersService = new VolunteersService();
module.exports = volunteersService;