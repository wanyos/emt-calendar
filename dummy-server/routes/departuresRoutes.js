import express from 'express';
import departuresController from '../controllers/departuresController.js';

const router = express.Router();

const { getDeparturesController, setDeparturesController, deleteDeparturesController, updateDeparturesController } = departuresController();

router.get('/', getDeparturesController);
router.post('/', setDeparturesController);

export default router;