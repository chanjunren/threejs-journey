import * as THREE from "three";
import CANNON from "cannon";
import {environmentMapTexture} from "../properties/textures.js";
import {concreteMaterial, defaultMaterial} from "../properties/materials.js";

export const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5

const floorPlane = new CANNON.Plane()
export const floorBody = new CANNON.Body()
floorBody.mass = 0
floorBody.addShape(floorPlane)
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2)
// floorBody.material = defaultMaterial