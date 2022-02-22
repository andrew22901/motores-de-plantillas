const express = require('express');
const loggerMiddleware = require('./middlewares/logger')
const autMiddleware = require('./middlewares/authorizer')
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
// el Middleware esta entre la peticion y la respuesta del servidor, lo que pasa en la mitad 


app.use([autMiddleware,
         loggerMiddleware]);
// Routes
app.get('/',(req, res) => {
   const html = `<h1>Bienvenido ${req.user.name} ${req.user.lastname}</h1>
   <h2>HOME</h2>`

    res.send(html);
});

app.get('/about', (req, res) => {
    res.send('<h1>ABOUT</h1>');
});



const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})
