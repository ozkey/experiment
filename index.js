//

/*


nodemon index.js

 http://localhost:8080/

*/


//start server routing similar to what apache will do but it give you a socket io
var serverRouting = require(__dirname + '/serverRouting.js');
serverRouting.init();
var io =serverRouting.getSocketIo()

//start the game
var gameServer = require('gameServer');
var myGameServer = new gameServer(io);
//start the event manager
myGameServer.eventManager();