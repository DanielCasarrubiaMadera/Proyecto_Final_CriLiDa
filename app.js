const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => { 
  res.send('En este buscador podras tener una experiencia unica al momento de buscar videos educativos en base al área de ciencias naturales'); 
});


app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 