#version 120

uniform float alpha;
uniform float time;
uniform sampler2D texture;

float noise(in vec2 coordinate, in float seed)
{
    vec2 coordActual = floor(coordinate * vec2(textureSize2D(texture)));
    return fract(sin(dot(coordActual*seed, vec2(12.9898, 78.233)))*43758.5453);
}

void main()
{
    float n = (noise(gl_TexCoord[0].st, time) - 0.5) * 0.25;
    gl_FragColor = texture2D(texture, gl_TexCoord[0].st) * gl_Color * vec4(0.0706 + n, 0.4 + n, 0.7804 + n, alpha);
}
