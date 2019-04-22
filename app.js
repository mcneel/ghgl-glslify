const express = require('express')
const app = express()

var port = process.env.PORT || 8080;
var glsl = require('glslify');

app.get('/', (req, res) => {
  var rc = glsl(`
    #pragma glslify: noise = require('glsl-noise/simplex/3d')

    precision mediump float;
    varying vec3 vpos;
    void main () {
      gl_FragColor = vec4(noise(vpos*25.0),1);
    }
  `);
  res.send(rc)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
