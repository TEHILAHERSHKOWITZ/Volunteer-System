const RequestForHelpsModel = require('../Models/RequestForHelpsModel');

class RequestForHelpService {

  async  getAll(queryParameters) {
        
        let result = RequestForHelpsModel.find({});
        let find={};
        if (queryParameters.status) {
            result =await result.find({ 'Status.typeOfStatus': queryParameters.status });
            if (find.length == 0)
                throw new Error(`helpRequest with location ${queryParameters.status} not found`);
        }
        if (queryParameters.place) {
            result = await result.find({ 'Place.placeCode': queryParameters.place });
            if (find.length == 0)
                throw new Error(`helpRequest with location ${queryParameters.place} not found`);
        }
        if (queryParameters.valuesOfPriority) {
            result =await result.find({ 'ValuesOfPriority.PriorityCode': queryParameters.valuesOfPriority });
            if (find.length == 0)
                throw new Error(`helpRequest with location ${queryParameters.valuesOfPriority} not found`);
        }
       
        return result;
    }


    async get(findId) {
        let foundVolunteer = await RequestForHelpsModel.find({ id: findId })
        return foundVolunteer
    }

    async update(foundRequestHelpById, foundValunteerCode)
    {
        let foundRequestHelp = await RequestForHelpsModel.findOne({id : foundRequestHelpById})
        if(!foundRequestHelp)
            throw new Error(`Invalid help request Id ${foundRequestHelp}!`)
        else if(foundRequestHelp.Volunteers.volunteersCode != null)
        {
            throw new Error('This help request already has a volunter!')
        }
        else{
            await RequestForHelpsModel.updateOne(
                { id: foundRequestHelpById }, 
                { $set: { Volunteers : foundValunteerCode, Status: 'Processing' } }
            )
                foundRequestHelp.volunteersCode = foundValunteerCode
                foundRequestHelp.status = 'Processing'
        }
        return foundRequestHelp
    }
 

}
let requestForHelpService = new RequestForHelpService();
module.exports = requestForHelpService;