'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbConfig = require('./secret/config-mongo.json');
var leaderboard = require('./leaderboard');

mongoose.connect(dbConfig.url);
mongoose.connection.on('error', function(err) {
    console.error(err);
});

// var tournamentSchema = new mongoose.Schema({

// });

// var teamSchema = new mongoose.Schema({

// });

// var seasonSchema = new mongoose.Schema({
//     year: Number,
//     tournaments: [tournamentSchema],
//     teams: [teamSchema]
// });

// var Season = mongoose.model('Season', seasonSchema);

// var season = new Season({year: 2016});
// season.save(function(err, year) {
//     if (err) return console.error(err);
//     console.log(season.year);
// });

var tournamentIds = ['016', '006', '002', '004', '003', '005', '007', '010', '473', '475', '009', '483', '020', '014', '012', '041', '018', '480', '011', '019', '021', '023', '025', '026', '471', '472', '476', '490', '518', '100', '032', '033', '034', '030', '013', '027', '505', '028', '060'];

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/static/public'));

// tournamentIds.forEach(function(tourn) {
//     leaderboard.getTournamentData(tourn);
// });

app.listen(80, function() {
    console.log('server is listening, so tell it what you want. what you really, really want.');
});