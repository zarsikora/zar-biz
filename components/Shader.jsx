import React, { useEffect, useRef } from "react";
import GlslCanvas from "glslCanvas";
import { motion } from "framer-motion";

const Shader = ({ img, opacity, alt }) => {

  const frag = `
  #ifdef GL_ES
  precision highp float;
  #endif

  uniform float u_time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  uniform vec3 spectrum;

  uniform sampler2D image;
  //uniform sampler2D cat;


  varying vec3 v_normal;
  varying vec2 v_texcoord;

  // NOISE - glsl fbm
  #define NUM_OCTAVES 5

  float rand(vec2 n) { 
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);
      
      float res = mix(
          mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
          mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
  }

  float fbm(vec2 x) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100);
      // Rotate to reduce axial bias
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
      for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);
          x = rot * x * 2.0 + shift;
          a *= 0.5;
      }
      return v;
  }

  void main(void)
  {
      vec2 uv = v_texcoord; // sets where it is 
      //uv.y = 1.0 - uv.y; 
      
      vec2 surface = vec2(
          mix(-0.3, 0.3, fbm(1.3 * uv + 0.5 * u_time)), // use mix to center x
          mix(-0.2, 0.3, fbm(1.3 * uv + 0.5 * u_time))
      );

      
      uv += refract(vec2(0.0, 0.0), surface, 1.0 / 1.333 ); // we are looking at this straight on (1), but the surface will wave (2), refraction indice from wiki
      
      vec4 color = texture2D(image, uv); // sets what the colors are pulled from 
      gl_FragColor = color;
  } 
  `;
  
  const setUniforms = {
    sampler2D: img
  };

  const canvasRef = useRef();
  const containerRef = useRef();

  const resizer = ( canvas, container ) => {
    canvas.width = container.clientWidth + window.devicePixelRatio;
    canvas.height = container.clientHeight + window.devicePixelRatio;
    canvas.style.width = container.clientWidth + "px";
    canvas.style.height = container.clientHeight + "px";

    console.log(canvas.width);
  };

  useEffect(() => {
    const node = canvasRef.current;
    const container = containerRef.current;
    const sandbox = new GlslCanvas(canvasRef.current);
    for (let k in setUniforms) {
      sandbox.setUniform(k, setUniforms[k]);
    }

    resizer(node, container);
    sandbox.load(frag);

    const handler = () => {
      if (
        node.clientWidth !== container.clientWidth ||
        node.clientHeight !== container.clientHeight
      )
        resizer(canvasRef.current, containerRef.current);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  // maybe adjust the return to have the canvas be smaller on the page
  return (
    <motion.div inital={{ opacity: 0 }} animate={{ opacity: .4 }} ref={containerRef} style={{ width: "100vw", height: "100vh", opacity: opacity, position: "fixed" }}>
      <canvas ref={canvasRef}>
        <p>{alt}</p>
      </canvas>
    </motion.div>
  );
}

export default Shader;