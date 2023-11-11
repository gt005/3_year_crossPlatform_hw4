import express from 'express';

import { 
    getAllWardrobesController,
    getWardrobesByIdController,
    createWardrobeController,
    updateWardrobeController,
    deleteWardrobeController
} from '../../controllers/furniture/wardrobeController';

import { wardrobeValidationRules } from './validators/wardrobes';
import { mongoIdValidator, validate } from '../validators/commonValidators';

const router = express.Router();

router.get('', getAllWardrobesController);
router.get('/:id', mongoIdValidator(), validate, getWardrobesByIdController);
router.post('/', wardrobeValidationRules(), validate, createWardrobeController);
router.put('/:id', mongoIdValidator(), wardrobeValidationRules(), validate, updateWardrobeController);
router.delete('/:id', mongoIdValidator(), validate, deleteWardrobeController);


export default router;
