"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const validationUser = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: `Preencher campos obrigatórios` });
    }
    next();
};
exports.default = validationUser;
