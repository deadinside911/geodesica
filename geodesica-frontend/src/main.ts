import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// the blackhole
const blackHoleGeo = new THREE.SphereGeometry(1, 32, 32);
const blackHoleMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const blackHole = new THREE.Mesh(blackHoleGeo, blackHoleMat);
scene.add(blackHole);

// the accretion disk
const torusGeo = new THREE.TorusGeometry(1.8, 0.3, 16, 100);
const torusMat = new THREE.MeshBasicMaterial({ color: 0xf39c12 })
const torus = new THREE.Mesh(torusGeo, torusMat);

// it looks so cursed without this
torus.rotation.x = Math.PI * 0.4;

scene.add(torus);

camera.position.z = 5;

function animate(time: number) {
    // do something cool later
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
