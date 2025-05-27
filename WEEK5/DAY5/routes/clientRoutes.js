const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/:userId', clientController.getClients);
router.post('/:userId', clientController.addClient);
// router.put('/:userId/:clientId', ...);
// router.delete('/:userId/:clientId', ...);

module.exports = router;
