const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => { 
  res.send('Bienvenidos a nuestro buscador de videos educativos, que esta enfatizado en el área de Ciencias Naturales'); 
});
app.get('/', (req, res) => { 
  res.send('En este buscador podras tener una experiencia unica al momento de buscar videos educativos en base al area de ciencias naturales'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 