var chat = require('../js/chat.js');



$(function () {
    var chata  = new chat();
    chata.init();
    chata.connect(io);
});