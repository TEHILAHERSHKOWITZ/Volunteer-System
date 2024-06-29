const express = require('express');
const router = express.Router();

const controller = require('../Controller-bl/ValuesOfPriorityControllers')


router.get('/', async (req, res) => {
    const result = await controller.getAll(req.query);
    res.json(result)
})

module.exports = router;