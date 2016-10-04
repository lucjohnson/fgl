'use strict';

var request = require('request');
var fs = require('fs');

// var url = 'http://www.pgatour.com/data/r/' + tournID + '/leaderboard-v2.json';
// var matchPlay = 'http://www.pgatour.com/data/r/470/2016/leaderboard_mp.json';

var topTenStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10"];

module.exports = {
    getTournamentData: function(tournID) {
        request({url:'http://www.pgatour.com/data/r/' + tournID + '/leaderboard-v2.json', json: true}, function(error, response, body) {
            var players = body.leaderboard.players;
            var topTen = [];
            players.forEach(function(player) {
                if (topTenStrings.indexOf(player.current_position) > -1) {
                    topTen.push(player.player_bio.first_name + ' ' + player.player_bio.last_name);
                }
            });
            // console.log(body.leaderboard.tournament_name);
            // topTen.forEach(function(player) {
            //     console.log(player.player_bio.first_name + " " + player.player_bio.last_name);
            // });
            fs.writeFileSync('./data/' + body.leaderboard.tournament_name, JSON.stringify(topTen));
            // console.log("Number of players:", topTen.length);
            // console.log(body.leaderboard.round_state);
        });
    }
}

// http.get(url, function(res) {
//     var body = '';
    
//     res.on('data', function(chunk) {
//         body += chunk;
//     });
    
//     res.on('end', function() {
//         var json = JSON.parse(body);
//         var players = json.leaderboard.players;
//         var topTen = [];
//         players.forEach(function(element) {
//             if(topTenStrings.indexOf(element.current_position) > -1) {
//                 topTen.push(element);
//                 // console.log(element.player_id);
//                 // console.log(element.player_bio.first_name + " " + element.player_bio.last_name);
//             }
//         }, this);
//         topTen.forEach(function(val) {
//             console.log(val.player_bio.first_name + " " + val.player_bio.last_name);
//         });
//         console.log("Number of players: " + topTen.length);
//         console.log(json.leaderboard.round_state);
//     });
// })
