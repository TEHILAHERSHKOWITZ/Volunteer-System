const express = require('express');
const router = express.Router();

const controller = require('../Controller-bl/RequestForHelpControllers')

router.get('/', async (req, res) => {
    const result = await controller.getAll(req.query);
    res.json(result)
})

router.get('/:id', async (req, res) => {
    const foundRequestForHelps = await controller.get(req.params.findId);
    if (foundRequestForHelps.length > 0) {
        res.json(foundRequestForHelps);
    } else {
        res.status(404).send(`requestForHelps with id ${req.params.findId} not found`);
    }
});


router.put('/:id', async (req, res, next) => {
    try {
        const result = await controller.update(req.params.id, req.body.volunteersCode);
        res.json(result)
    } catch (error) {
        if (error.message.startsWith('Invalid help request Id')) {
            res.status(404).send(`could not update help request id ${req.params.id}, help request not found`);
        }
        else if (error.message == 'This help request already has a volunter!')
            res.status(404).send(`could not update help request id ${req.params.id}, This HelpRequest alredy has a volunteer`);

        else next(error);
    }
});

module.exports = router;

