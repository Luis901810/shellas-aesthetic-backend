const { Router } = require('express');

const router = Router();

module.exports = (app) => {
    router.get('/', (req, res) => {
        res.status(200).json({ message: "Welcome to Shella's Aesthetic" })
    })
}