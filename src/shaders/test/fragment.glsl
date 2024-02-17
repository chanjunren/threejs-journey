// precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying float vRandom;
varying float vElevation;
varying vec2 vUv;

void main() {
    // gl_FragColor = vec4(0.5, vRandom, 1.0, 1.0);
    // gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);
    // gl_FragColor = vec4(uColor, 1.0);

    // vec4 textureColor = texture2D(uTexture, vUv);
    // textureColor.rgb *= vElevation * 2.0 + 0.5;
    // gl_FragColor = textureColor;

    // Some chio rainbow gradient
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    // Another chio gradient
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // Black and white chio gradient
    // float strength = vUv.x;
    // float strength = vUv.y;

    // Inverting vUv.y
    // float strength = 1.0 - vUv.y;

    // Squeezing the gradient
    // float strength = vUv.y * 10.0;

    // float strength = mod(vUv.y * 10.0, 1.0);
    // float strength = mod(vUv.x * 10.0, 1.0);

    // No gradient
    //strength = step(0.5, strength);
    // Bigger gap
    // strength = step(0.8, strength);

    // Combining
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // Intersections
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    
    // Inverted Ls 
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;

    // Many crosses
    // float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength = barX + barY;

    // Trippy
    // float strength = abs(vUv.x - 0.5);
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Squares with outlines
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // Thinner square
    float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));


    gl_FragColor = vec4(vec3(strength), 1.0);
}
