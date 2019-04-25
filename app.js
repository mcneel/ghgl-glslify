const express = require('express');
const glsl = require('glslify');
const bodyParser = require('body-parser');
const packageInfo = require('package-info');
const fs = require('fs');

var content = fs.readFileSync('package.json');
var glslPackages = JSON.parse(content).dependencies;
delete glslPackages['express'];
delete glslPackages['glslify'];
delete glslPackages['body-parser'];
delete glslPackages['package-info'];


const app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('ghgl-glslify online');
});

var packageList = null;
app.get('/packages', async (req, res) => {
  if( packageList === null ) {
    packageList = [];
    let keys = Object.keys(glslPackages);
    for(let i=0; i<keys.length; i++) {
      let info = await packageInfo(keys[i]);
      packageList.push(info);
    }
  }
  res.send(packageList);
});

app.post('/process', function(req, res){
  var code = req.body.code;
  var processed = glsl(code);
  res.send(processed);
});


app.listen(port, () => console.log(`ghgl-glslify app listening on port ${port}!`))
