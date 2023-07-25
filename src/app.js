import populationRouter from "./routes/population-route.js";
import { specs, swaggerUi } from './swagger.js';
import authRouter from "./routes/auth-route.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://timothee:root@cluster0.oc3ddit.mongodb.net/nodeProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion BDD réussis')
}).catch(() => {
    console.log('Connexion Refusée !!!!!!!!!!!')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/population', populationRouter)
app.use('/token', authRouter)

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});


