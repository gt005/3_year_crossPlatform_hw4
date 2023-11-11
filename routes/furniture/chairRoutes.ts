import express from 'express';

import { 
    getAllChairsController,
    getChairsByIdController,
    createChairController,
    updateChairController,
    deleteChairController
} from '../../controllers/furniture/chairController';

import { chairValidationRules } from './validators/chairs';
import { mongoIdValidator, validate } from '../validators/commonValidators';

const router = express.Router();

router.get('', getAllChairsController);
router.get('/:id', mongoIdValidator(), validate, getChairsByIdController);
router.post('/', chairValidationRules(), validate, createChairController);
router.put('/:id', mongoIdValidator(), chairValidationRules(), validate, updateChairController);
router.delete('/:id', mongoIdValidator(), validate, deleteChairController);

export default router;
