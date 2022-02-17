import './style.css'
import * as THREE from "three";


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

//Texture Loader
const loader = new THREE.TextureLoader();

//Background
const bgTexture = loader.load("/portfolio/assets/images/space.jpg");
scene.background = bgTexture;

//Renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-1);

renderer.render(scene, camera);


//Avatar
const meTexture = loader.load("/portfolio/assets/images/avatar.png");
const avatar = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({
    map: meTexture
}));

scene.add(avatar);

avatar.position.setZ(-7);
avatar.position.setX(4);
avatar.position.setY(0);


//Earth - night
const earthTexture = loader.load("/portfolio/assets/images/earthNight.jpg");
const bumpTexture = loader.load("/portfolio/assets/images/bump.jpg")
const specularTexture = loader.load("/portfolio/assets/images/specular.jpg")
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.5,
        specularMap: specularTexture,
        specular: new THREE.Color("#031023")
    })
);

scene.add(earth);

earth.position.setZ(16);
earth.position.setX(-15);
earth.position.setY(1);

//moon
const moonTexture = loader.load("/portfolio/assets/images/moon.jpg")
const moonBump = loader.load("/portfolio/assets/images/moonBump.jpg")
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshPhongMaterial({
        map: moonTexture,
        bumpMap: moonBump,
        bumpScale: 0.2,
    })
);

//moon orbit
const moonObject = new THREE.Object3D();
scene.add(moonObject);
moonObject.add(moon);

moonObject.position.setZ(16);
moonObject.position.setX(-15);
moonObject.position.setY(1);
moon.position.x = -17;


//Light
const pointLight = new THREE.PointLight(0xffffff, 0.7);
pointLight.position.set(7, 27, 7);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


//Star Generator
const geometryStar = new THREE.SphereGeometry(0.15, 24, 24);
const materialStar = new THREE.MeshStandardMaterial({
    color: 0xffffff
});

function addStar() {
    const star = new THREE.Mesh(geometryStar, materialStar);
    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
};

Array(200).fill().forEach(addStar);

// Scroll Animation

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    avatar.rotation.y += 0.03;
    
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

//loop
function animate() {
    requestAnimationFrame(animate);

    earth.rotation.y += 0.001;
    moonObject.rotation.y += 0.005;

    renderer.render(scene, camera);
};

animate();