module.exports = gameClient;

function gameClient () {
    'use strict';

    var camera, scene, renderer;
    var geometry, material, mesh;
    var avatar;
    var socket;
    var gameBoardClient;
    var username = "";

    this.init = function (controls) {


        //gameBoardClient.newAvatar("as");
    };

    this.connect = function(io){
        /**
         * Created by ozkey_000 on 3/09/14.
         */

        socket = io.connect('http://localhost:8080');

// on connection to server, ask for user's name with an anonymous callback
        socket.on('connect', function () {
            // call the server-side function 'adduser' and send one parameter (value of prompt)
            var id = Math.floor((Math.random() * 1000) + 1);
            username = "u"+id;
            socket.emit('adduser', username);

            init3D();

            gameBoardClient = new gameBoard( THREE ,camera, scene , "client")
            gameBoardClient.setUsername(username);
            animate();



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

        socket.on('gameBoardData', function (data) {
           gameBoardClient.updateGameBoard(data);
        });




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
                if (e.which == 38) {
                    socket.emit('sendkey', "38");
                }
                if (e.which == 39) {
                    socket.emit('sendkey', "39");
                }
                if (e.which == 40) {
                    socket.emit('sendkey', "40");
                }


// when the client hits ENTER on their keyboard
            $('#data').keypress(function (e) {
                if (e.which == 13) {
                    $(this).blur();
                    $('#datasend').focus().click();
                }
            });
        });


    }

    function init3D() {

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 100;

        scene = new THREE.Scene();

        renderer =  new THREE.WebGLRenderer();  //new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

        $("#gameBoard").append(renderer.domElement);

    }

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame(animate);

        var avatars = gameBoardClient.getAvatars();
        for (var i in avatars) {
            console.log("avatar" + i);
            avatars[i].motion();
        }

        renderer.render(scene, camera);
    }


}



