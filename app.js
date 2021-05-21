const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => { 
  res.send('Bienvenidos todos, este es un espacio enfatizado en las ciencias naturales para que aprendamos a buscar videos educativos relacionados con el área. '); 
});


app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 