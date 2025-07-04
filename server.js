import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import productRoutes from './routes/productsRoutes.js';

const app = express();

app.use("/api/notes", notesRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
