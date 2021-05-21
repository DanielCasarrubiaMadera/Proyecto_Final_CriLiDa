const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => { 
  res.send('Bienvenidos a nuestro buscador de videos educativos, que esta enfatizado en el área de Ciencias Naturales'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 