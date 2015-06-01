var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server);


var serverRouting = {
    init: function () {
        server.listen(8080);

        this.initRouting();

    },

    initRouting: function () {
        app.get('/', function (req, res) {
            res.sendFile(__dirname + '/public/html/index.html');
        });
        app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder
        app.use('/threejs', express.static(__dirname + '/node_modules/three'));
        app.use('/gameServer/public', express.static(__dirname + '/node_modules/gameServer/public'));
    },
    getSocketIo: function () {
        return io;
    }
}

module.exports = serverRouting;
