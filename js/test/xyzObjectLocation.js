var xyzObjectLocation = require('../src/xyzObjectLocation.js');
var THREE = require('three');

describe("A suite s", function() {

    var location = new xyzObjectLocation(THREE);
    location.setRotation(3,1,2);
    location.setVelocity(1,2,3);
    location.setPosition(1,2,3);

    var pos = eval( location.getPosition());
    var dir = eval( location.getRotation());

    it("position contains x", function() {
        expect(pos.x ==  "1" ).toBe(true);
    });
    it("position contains y", function() {
        expect(pos.x ==  "1" ).toBe(true);
    });
    it("position contains z", function() {
        expect(pos.x ==  "1" ).toBe(true);
    });

    it("speed has a value", function() {
        expect(Math.round(location.getSpeed()* 100) / 100).toBe(3.74);
    });

});