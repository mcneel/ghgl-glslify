const express = require('express')
const glsl = require('glslify');
const bodyParser = require('body-parser');

const app = express()
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

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

app.post('/process', function(req, res){
  var code = req.body.code;
  var processed = glsl(code);
  res.send(processed);
});


app.listen(port, () => console.log(`ghgl-glslify app listening on port ${port}!`))
