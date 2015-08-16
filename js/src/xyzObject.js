module.exports = xyzObject;

var THREE = require('three');
var xyzObjectGeometry = require('../src/xyzObjectGeometry.js');
var xyzObjectLocation = require('../src/xyzObjectLocation.js');




function xyzObject (THREE,scene) {
    'use strict';
    this.geometry = new xyzObjectGeometry(THREE);
    this.location = new xyzObjectLocation(THREE);

    scene.add(this.geometry.getMesh());


}



