import { User } from "../models/User.js"
import { generateToken } from "../utils/generateToken.js";


export const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password })
        await user.save()

        // jwt
        // ****
        const {token, expiresIn} = generateToken(user.id);
        return res.json({ token, expiresIn})

    } catch (error) {
        console.log("Err: ", error)

        // Opcion por defecto de mongoose  
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe un usuario registrado con este correo" })
        }

        return res.status(500).json({ error: "Ops! Ha ocurrido un error en el servidor." })
    }
}



export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ error: "No existe este usuario" })
        }

        const resultPassword = await user.resultComparePassword(password)

        if (!resultPassword) {
            return res.status(400).json({ error: "Credenciales incorrectas!" })
        }

        res.json({
            ok: true
        })

    } catch (error) {
        console.log("error login: ", error)
    }

}

export const userData = async() => {
    try {
        
    } catch (error) {
        console.log(error)
    }

}