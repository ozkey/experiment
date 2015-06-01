/**
 * Created by ozkey_000 on 3/09/14.
 */


var camera, scene, renderer;
var geometry, material, mesh;
var avatar;
$(function () {
    init();
    animate();
});


function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;

    scene = new THREE.Scene();

    //geometry = new THREE.CubeGeometry(200, 200, 200);
    //material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    //mesh = new THREE.Mesh(geometry, material);
//    avatar = character.createCharacter("");
//    scene.add(avatar.mesh);


    avatar = new character(THREE,"");
    scene.add(avatar.mesh);

    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    $("#gameBoard").append(renderer.domElement);
    //document.body.appendChild( renderer.domElement );


}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    avatar.motion();
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}

