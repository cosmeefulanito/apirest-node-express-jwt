import express from "express"
import { login, register } from "../controllers/auth.controller.js ";
import { body } from 'express-validator'
import { errorsValidation } from "../middleware/registerResultValidation.js";


const router = express.Router();

router.post("/register", [
    body("email", "Formato incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Contraseña mínimo 6 caracteres")
        .trim()
        .isLength({ min: 6 }),
        body('passwordConfirmation').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Las password deben ser iguales')
            }
            return true;
        })
], errorsValidation, register)

router.post("/login",[
    body("email", "Formato incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
body("password", "Contraseña mínimo 6 caracteres")
    .trim()
    .isLength({ min: 6 })
],login)

router.get("/ruta/protected",)

export default router;


