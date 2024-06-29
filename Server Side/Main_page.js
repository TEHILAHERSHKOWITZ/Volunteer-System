const mongooseConnect = require('./Db/MongoConnected');
const PlaceRoute = require('./Routes/Place');
const RequestForHelpRoute = require('./Routes/RequestForHelp');
const StatusRoute = require('./Routes/Status');
const ValuesOfPriorityRoute = require('./Routes/ValuesOfPriority');
const VolunteersRoute = require('./Routes/Volunteers');


const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use('/api/Places', PlaceRoute);
app.use('/api/RequestForHelps', RequestForHelpRoute);
app.use('/api/Status', StatusRoute);
app.use('/api/ValuesOfPrioritys', ValuesOfPriorityRoute);
app.use('/api/Volunteers', VolunteersRoute);


(async () => {
    await mongooseConnect();
  // Any code here will be executed after the books variable has the value.
})()

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})