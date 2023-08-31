const express = require('express');
const app = express();
const ticketController = require('./controllers/ticketController');
const escritorioController = require('./controllers/escritorioController');


app.use(express.json());


app.use('/api/tickets', ticketController);
app.use('/api/escritorios', escritorioController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
