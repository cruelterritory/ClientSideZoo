const express = require('express')
const app = express();
const port = 8000;

app.use(express.static("public"));

app.get('/newanimal', function(req, res) {
  console.log('i receive a GET request');
 
  const animalNew = '{ "name": "Jeff", "age": 2, "gender": "Male", "weight": 20, "isPregnant": false }'; 

  res.json(animalNew);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});