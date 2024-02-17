#define PI 3.1415926535897932384626433832795
// precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying float vRandom;
varying float vElevation;
varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5454123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid) {
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//
vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}


float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

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
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // HSL stripe pattern
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // HSL grid pattern
    // float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;
    

    // Small pixels
    // float strength = random(vUv);

    // Random bigger pixels
    // vec2 gridUv = vec2(floor(vUv.x * 10.0)/ 10.0, floor(vUv.y * 10.0)/ 10.0);
    // float strength = random(gridUv);

    // Diagonal random pixels
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0);
    // float strength = random(gridUv);

    // From corner => brighter strength
    // float strength = length(vUv);

    // Shadow in the middle
    // float strength = distance(vUv, vec2(0.5));

    // Inverse of shadow in the middle
    // float strength = 1.0 - distance(vUv, vec2(0.5));

    // Light lens effect
    // float strength = 0.015 / (distance(vUv, vec2(0.5)));

    // Flattened light (TV off) effect
    // float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));

    // Star? Idk
    // float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    // strength *= 0.15 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));

    // vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
    // float strength = 0.15 / (distance(vec2(rotatedUv.x, (rotatedUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    // strength *= 0.15 / (distance(vec2(rotatedUv.y, (rotatedUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));

    // Disk
    // float strength = step(0.5, distance(vUv, vec2(0.5)) + 0.25);

    // Shadow disk?
    // float strength = abs(distance(vUv, vec2(0.5)) - 0.25);

    // Light disk idk
    // float strength = step(0.02, abs(distance(vUv, vec2(0.5)) - 0.25));

    // Inverted light disk (just a circle)
    // float strength = 1.0 - step(0.02, abs(distance(vUv, vec2(0.5)) - 0.25));

    // Trippy goo idk
    // vec2 wavedUv = vec2(
    //     vUv.x,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    // float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

    // Trippy goo surrounded by smaller goos? Idk
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 30.0) * 0.1,
    //     vUv.y + sin(vUv.x * 30.0) * 0.1
    // );
    // float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

    // Old windows media music player
    // vec2 wavedUv = vec2(
    //     vUv.x + sin(vUv.y * 100.0) * 0.1,
    //     vUv.y + sin(vUv.x * 100.0) * 0.1
    // );
    // float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

    // Some gradient idk how to describe this
    // float angle = atan(vUv.x, vUv.y);
    // float strength = angle;

    // ??
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // float strength = angle;

    // Shadowy line in the middle
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    // angle /= PI * 2.0;
    // angle += 0.5;
    // float strength = angle;

    // Hypnotism pattern
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
    // float strength = mod(angle * 20.0, 1.0);

    // Hypnotism pattern 2
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
    // float strength = sin(angle * 100.0);

    // Swiggle
    // float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
    // float radius = 0.25 + sin(angle * 100.0) * 0.02;
    // float strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - radius));

    // Perlin noise
    // float strength = cnoise(vUv * 10.0);

    // Perlin noise with step
    // float strength = step(0.0, cnoise(vUv * 10.0));

    // Shiny perlin noise
    // float strength = 1.0 - abs(cnoise(vUv * 10.0));

    // Perlin noise pattern thingy? trippy
    // float strength = sin(cnoise(vUv * 10.0) * 20.0);

    // float strength = step(0.9, sin(cnoise(vUv * 10.0) * 20.0));

    // gl_FragColor = vec4(vec3(strength), 1.0);
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    vec3 color = vec3(vUv.x);
    gl_FragColor = vec4(color, 1.0);
}

