const express = require('express');
const glsl = require('glslify');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('ghgl-glslify online');
});

app.post('/process', function(req, res){
  var code = req.body.code;
  var processed = glsl(code);
  res.send(processed);
});


app.listen(port, () => console.log(`ghgl-glslify app listening on port ${port}!`))
