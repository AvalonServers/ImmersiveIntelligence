#version 120

uniform float alpha; // Passed in by callback
uniform float time;
uniform sampler2D texture;

void main()
{
    gl_FragColor = texture2D(texture, gl_TexCoord[0].st) * gl_Color * vec4(1, 1, 1, alpha);
}
