// mongoimport.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iswf-dev');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var fund = require('./fund');

var Etf = mongoose.model(
	'Etf', 
	mongoose.Schema({
		"name": String,
		"desc": String,
		"ticker": String,
		"type": String
	})
);

Etf.find({},function(err,dbetfs){

	for(var i=0; i<dbetfs.length; i++) {
		dbetfs[i].remove();
	}

	for(var i=0; i<fund.length; i++) {
		var etf = new Etf({
			"name": fund[i].name,
			"desc": fund[i].desc,
			"ticker": fund[i].ticker,
			"type": fund[i].type
		})

		etf.save(function(err,dbetf){
			if (err)
			console.log("Error on etf save!");
		})
	}
	
	console.log("Etf import finished! Press Ctrl+C to exit.");
})
