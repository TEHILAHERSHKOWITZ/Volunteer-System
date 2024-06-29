const express = require('express');
const router = express.Router();

const controller = require('../Controller-bl/VolunteersControllers');

router.get('/', async (req, res) => {
    const Volunteers = await controller.getAll(req.query);
    res.json(Volunteers);
})

router.get('/:volunteersCode', async (req, res, next) => {
    try {
        const foundVolunteers = await controller.get(req.params.volunteersCode);
        if (foundVolunteers.length > 0) {
            res.json(foundVolunteers);
        }
        else
            res.status(404).send(`Volunteer with id ${req.params.volunteersCode} not found`);
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        let result = await controller.insert(req.body);
        res.status(201).send(result);
    } catch (error) {
        if (error.message == 'Invalid new volunteer code') {
            res.status(400).send(`volunteer with id ${req.body.volunteerCode} invalid`)
        }
        else next(error);
    }
});

module.exports = router;