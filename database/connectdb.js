import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Conectado a la BD Mongo")    
} catch (error) {
    console.log("Error al conectarse a BD Mongo", error);
}