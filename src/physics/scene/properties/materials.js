import CANNON from "cannon";

export const concreteMaterial = new CANNON.Material('concrete')
export const plasticMaterial = new CANNON.Material('plastic')

// Contains properties for when two materials collide
export const concretePlasticContactMaterial = new CANNON.ContactMaterial(
    concreteMaterial,
    plasticMaterial,
    {
        // How much does it rub (default 0.3)
        friction: 0.1,
        // How much does it bounce (default 0.3)
        restitution: 0.7
    }
)

export const defaultMaterial = new CANNON.Material('default')
export const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1,
        restitution: 0.7
    }
)