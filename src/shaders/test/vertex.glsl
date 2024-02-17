// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;

uniform vec2 uFrequency;
uniform float uTime;

// attribute vec3 position;
attribute float aRandom;
// attribute vec2 uv;

// For passing values to fragment.glsl
varying vec2 vUv;
varying float vRandom;
varying float vElevation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // Just some random methods for varying the flag appearance
    // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
    // modelPosition.z += aRandom * 0.1;
    // modelPosition.z += sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
    // modelPosition.z += sin(modelPosition.y * uFrequency.y + uTime) * 0.1;

    // float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    // elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
    // vElevation = elevation;
    // modelPosition.z += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    // Passing attributes to fragment.glsl
    vRandom = aRandom;
    vUv = uv;

    gl_Position = projectedPosition;
}