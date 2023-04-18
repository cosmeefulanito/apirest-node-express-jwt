import express from "express";
import 'dotenv/config.js';
import './database/connectdb.js';
import authRouter from "./routes/auth.route.js";

const app = express()

app.use(express.json()); //Habilita a express para procesar solicitudes json
app.use("/api/v1", authRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Conectado ✌️🙌!  http://localhost:${PORT}`)) 