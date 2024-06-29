const PlaceModel = require('../Models/PlacesModel');

class PlaceService{
  async  getAll(queryParameters) {

        let result =await PlaceModel.find({});
        let find = {}

        if (queryParameters.placeCode) {
            find = result.find({ 'volunteersCode': queryParameters.placeCode })
            if (!(result == 0))
                throw new Error('')
            else
                result = find
        }
        return result;
    }
}
let placeService = new PlaceService();
module.exports = placeService;