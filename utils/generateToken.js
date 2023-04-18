import jwt from "jsonwebtoken";
// import 'dotenv/config.js';

export const generateToken = (uid) => {
    const expiresIn = 60*15;
    try {
        // console.log("UID: ", uid)
        // console.log("JWT KEY: ",process.env.JWT_SECRET)        
        const token = jwt.sign({ id: uid }, process.env.JWT_SECRET,{expiresIn});
        return {token, expiresIn};

    } catch (error) {
        console.log("error token: ", error)

    }
}