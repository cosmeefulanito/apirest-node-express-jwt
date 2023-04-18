import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    }
})


userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next()
    } catch (error) {
        console.log("error al tratar de hashear", error)
    }
})

userSchema.methods.resultComparePassword = async function(candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password);
}

export const User = model('user', userSchema);