import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        // Capture the server instance returned by app.listen
        const server = app.listen(8080, () => console.log('Server has started on: http://localhost:8080'));

        // Set the timeout property on the server instance
    } catch (err) {
        console.log(err);
    }
};

startServer();
