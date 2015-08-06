var xyzObjectLocation = require('../../js/xyzObjectLocation.js');
var THREE = require('three');

describe("A suite s", function() {

    var location = new xyzObjectLocation(THREE);
    location.setDirection(1,1,1);

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

});