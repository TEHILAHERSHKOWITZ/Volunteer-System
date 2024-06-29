const express = require('express');
const router = express.Router();

const controller = require('../Controller-bl/PlaceControllers');

router.get('/', async (req, res) => {
    const result = await controller.getAll(req.query);
    res.json(result)
})

router.get('/:placesId', async (req, res) => {
    const foundPlaces = await controller.get(req.params.placesId);
    if (foundPlaces) {
        res.json(foundPlaces);
    }
    else res.status(404).send(`student with id ${req.params.placesId} not found`);
})

module.exports=router;