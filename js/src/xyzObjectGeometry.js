module.exports = xyzObjectGeometry;

function xyzObjectGeometry (THREE) {
    'use strict';
    var GeometryData = new Array();
    GeometryData[0][0][0] = 1;


    this.setPosition = function(x,y,z){
        position.x = x;
        position.y = y;
        position.z = z;
    };
    this.getCommsData = function(){
        return { "position":this.getPosition(),"direction":this.getDirection()}
    }

}



