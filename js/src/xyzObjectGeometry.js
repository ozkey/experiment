module.exports = xyzObjectGeometry;

function xyzObjectGeometry (THREE) {
    'use strict';

    //var GeometryData = new Array();
    //GeometryData[0][0][0] = 1;

    this.mesh = null;

    this.getMesh = function(){
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
        var body = new THREE.Mesh(geometry, material);
        this.mesh = new THREE.Object3D();
        this.mesh.add(body);

        this.mesh.position.x = -10;
        this.mesh.position.y  = -10;
        this.mesh.position.z = -10;



        //var geometry = new THREE.BoxGeometry( 20, 20, 20 );
        //
        //this.mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial( ) );
        return this.mesh;

    };



}



