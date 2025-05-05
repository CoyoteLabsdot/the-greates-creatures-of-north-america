const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Modelo
const EspecieSchema = new mongoose.Schema({
  nombreComun: String,
  nombreCientifico: String,
  reino: { type: String, enum: ['Fauna', 'Flora', 'Funga'] },
  descripcion: String,
  ubicacion: String,
  imagenUrl: String,
  estadoConservacion: String
});
const Especie = mongoose.model('Especie', EspecieSchema);

// Configuración
const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/enciclopedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Rutas
app.get('/especies', async (req, res) => {
  const especies = await Especie.find();
  res.json(especies);
});

app.post('/especies', async (req, res) => {
  const especie = new Especie(req.body);
  await especie.save();
  res.json(especie);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
