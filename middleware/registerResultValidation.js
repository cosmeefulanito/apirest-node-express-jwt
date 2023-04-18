import { validationResult } from "express-validator";

export const errorsValidation = (req, res, next) => {
    const errorsResult = validationResult(req);

    if (!errorsResult.isEmpty()) {
        return res.status(400).json({ errors: errorsResult.array() })
    }

    next()

}

