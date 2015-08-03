module.exports = xyzObject;

function xyzObject (THREE) {
    'use strict';

    this.direction = new THREE.Vector3(0, 0, 0);
    this.position = new THREE.Vector3(0, 0, 0);

    this.setDirection = function (x,y,z) {
        this.direction.set(x, y , z);
    };


    //this.move= function () {
    //    'use strict';
    //    // We update our Object3D's position from our "direction"
    //    this.mesh.position.x += this.direction.x * ((this.direction.z === 0) ? 4 : Math.sqrt(8));
    //    this.mesh.position.z += this.direction.z * ((this.direction.x === 0) ? 4 : Math.sqrt(8));
    //
    //}


    this.getPosition = function(){
        return {"x":this.position.x, "y":this.position.y,"z":this.position.z}
    };
    this.getDirection= function(){
        return {"x":this.direction.x, "y":this.direction.y,"z":this.direction.z}
    };

    this.setPosition = function(x,y,z){
        this.mesh.position.x = x;
        this.mesh.position.y = y;
        this.mesh.position.z = z;
    };
    this.getCommsData = function(){
        return {"username":this.username, "position":this.getPosition(),"direction":this.getDirection()}

    }


}



