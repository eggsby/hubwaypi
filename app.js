//Declarations
var express = require('express'),
    stations = require('./routes/station'),
    app = express();  

//Setup API calls
app.get('/hubwaypi/stations', stations.allStations);
app.get('/hubwaypi/stations/id/:id', stations.stationById);
app.get('/hubwaypi/stations/id/:id/:attr', stations.stationAttr);
app.get('/hubwaypi/stations/gt/:num', stations.stationsByBikeQty);
app.get('/hubwaypi/stations/closest/:lat/:long/:num', stations.closestStation);
app.get('/hubwaypi/stations/closest/:lat/:long', stations.closestStation);

//Configure app
app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});

//Actually show the server
app.listen(80);
console.log("Server running at http://127.0.0.1:80/");