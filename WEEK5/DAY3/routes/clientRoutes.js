import express from 'express';
import * as clientController from '../controllers/clientController.js';

const router = express.Router();

router.get('/', clientController.getClients);
router.get('/:id', clientController.getClient);
router.post('/', clientController.addClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.removeClient);

export default router;
