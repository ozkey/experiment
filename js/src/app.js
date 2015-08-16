var chat = require('chat.js');

$(function () {
    var chata  = new chat();
    chata.init();
    chata.connect(io);
});