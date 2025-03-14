#version 120

//Author: Pabilo8
//RGB color shader
uniform vec3 color;// Passed in by callback
uniform sampler2D bgl_RenderedTexture;

void main()
{
    gl_FragColor = texture2D(bgl_RenderedTexture, gl_TexCoord[0].st) * gl_Color * vec4(color.xyz,1.0);
}