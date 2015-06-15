//

/*


nodemon index.js

 http://localhost:8080/

*/


//start server routing similar to what apache will do but it give you a socket io
var experimentServerRouting = require(__dirname + '/lib/experimentServerRouting.js');
experimentServerRouting.experimentServerRoutingInit(__dirname);
var io =experimentServerRouting.getSocketIo()

var chat = require(__dirname + '/lib/chat.js');
var chat = new chat(io);
//start the event manager
chat.chatEventManager();

