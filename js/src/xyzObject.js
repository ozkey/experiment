module.exports = xyzObject;

var THREE = require('three');
var geometry = new xyzObjectGeometry(THREE);

var object = this.mesh = new THREE.Object3D();



function xyzObject (THREE) {
    'use strict';

    this.velocity = new THREE.Vector3(0, 0, 0);
    this.setVelocity = function (x,y,z) {
        this.velocity.set(x, y , z);
    };
    this.getSpeed = function(){
        var speed = Math.sqrt((this.velocity.x * this.velocity.x) + (this.velocity.y * this.velocity.y) + (this.velocity.z * this.velocity.z));
        return speed;
    };
    this.getPosition = function(){
        return JSON.stringify(this.mesh.position);
    };
    this.getDirection= function(){
        return JSON.stringify(this.direction);
    };
    this.setPosition = function(x,y,z){
        this.mesh.position.x = x;
        this.mesh.position.y = y;
        this.mesh.position.z = z;
    };

}



