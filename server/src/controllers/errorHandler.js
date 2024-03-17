"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";
    error.message = error.message || "Internal server error";
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        statusCode: error.statusCode
    });
};