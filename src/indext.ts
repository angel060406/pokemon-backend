import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import pokemonRoutes from './routes/PokemonRoutes';
import commentRoutes from './routes/commentRoutes';
import cors from 'cors';
import http from 'http';
import { initializeWebSocketServer } from './websocket';

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = initializeWebSocketServer(server);

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/auth', authRoutes);
app.use('/api/pokemons', pokemonRoutes);
app.use('/api/comments', commentRoutes);

connectDB();

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('WebSocket server running');
});
