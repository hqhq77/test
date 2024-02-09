const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}`));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.use(cors());

app.post('/', (req, res) => {
  console.log('POST /');
  var body=''
  req.on('data',function(data){
    body+=data;
  });
  req.on('end', function(){
    console.log(Date());
    console.log(body);
  });
  // Send response
  var data=[];
  data.push(req.body);  
  res.sendStatus(200);
});
