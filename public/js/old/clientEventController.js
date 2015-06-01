/**
 * Created by ozkey_000 on 3/09/14.
 */

var socket = io.connect('http://localhost:8080');

// on connection to server, ask for user's name with an anonymous callback
socket.on('connect', function () {
    // call the server-side function 'adduser' and send one parameter (value of prompt)
    socket.emit('adduser', "userName");
});

// listener, whenever the server emits 'updatedata', this updates the chat body
socket.on('updatedata', function (username, data) {
    $('#conversation').append('<b>' + username + ':</b> ' + data + '<br>');
});

// listener, whenever the server emits 'updateusers', this updates the username list
socket.on('updateusers', function (data) {
    $('#users').empty();
    $.each(data, function (key, value) {
        $('#users').append('<div>' + key + '</div>');
    });
});

// on load of page
$(function () {
    // when the client clicks SEND
    $('#datasend').click(function () {
        var message = $('#data').val();
        $('#data').val('');
        // tell server to execute 'sendchat' and send along one parameter
        socket.emit('sendchat', message);
    });

//
//    left     37
//    up       38
//    right    39
//    down     40

    $(document).keydown (function(e) {
        if (e.which == 37) {
            socket.emit('sendkey', "37");
        }
        if (e.which == 39) {
            socket.emit('sendkey', "39");
        }
    });

// when the client hits ENTER on their keyboard
    $('#data').keypress(function (e) {
        if (e.which == 13) {
            $(this).blur();
            $('#datasend').focus().click();
        }
    });
});

