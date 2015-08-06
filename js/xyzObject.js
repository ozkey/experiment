module.exports = xyzObject;
var xyzObjectGeometry = require('../js/xyzObjectGeometry.js');
var xyzObjectLocation = require('../js/xyzObjectLocation.js');

function xyzObject (THREE) {
    'use strict';

    var geometry = new xyzObjectGeometry(THREE);
    var location = new xyzObjectLocation(THREE);

}



