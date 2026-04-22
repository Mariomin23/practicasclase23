import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log("MarioHola");
    res.json({ message: 'API funcionando' });
}); // <-- Aquí faltaba cerrar el bloque });

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});