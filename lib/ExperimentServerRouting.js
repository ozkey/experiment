var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server);

var appPath = "";

var experimentServerRouting = {
    experimentServerRoutingInit: function (app_Path) {
        appPath = app_Path;
        server.listen(8080);
        this.initRouting();
    },

    initRouting: function () {
        app.get('/', function (req, res) {
            res.sendFile(appPath + '/public/html/experiment.html');
        });
        app.use(express.static(appPath + "/public")); //use static files in ROOT/public folder
        app.use('/threejs', express.static(appPath + '/node_modules/three'));
    },
    getSocketIo: function () {
        return io;
    }
}

module.exports = experimentServerRouting;
