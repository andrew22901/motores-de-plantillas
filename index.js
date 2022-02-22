const express = require('express');
const apiRoutes = require('./routers/index');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
// el Middleware esta entre la peticion y la respuesta del servidor, lo que pasa en la mitad 
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './nav-app/index.html') );
});



app.use('/api', apiRoutes)


const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})

