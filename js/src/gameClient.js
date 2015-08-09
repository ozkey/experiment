var THREE = require('three');
var xyzObject = require('xyzObject.js');



$(function () {
    var game  = new gameClient();
    game.init();
    game.connect(io);

    var x = new xyzObject(THREE);
    console.log(JSON.stringify(x));

});

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
        socket.on('connect', function () {
            // call the server-side function 'adduser' and send one parameter (value of prompt)
            //var id = Math.floor((Math.random() * 1000) + 1);
            //username = "u"+id;
            //socket.emit('adduser', username);
            init3D();
            animate();
        });


        socket.on('updatedata', function (username, data) {
        });

        socket.on('updateusers', function (data) {
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

        });
    };

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
        //var avatars = gameBoardClient.getAvatars();
        //for (var i in avatars) {
        //    console.log("avatar" + i);
        //    avatars[i].motion();
        //}

        //console.log(JSON.stringify({'x':'1'}));
        renderer.render(scene, camera);
    }


}



