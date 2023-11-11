"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wardrobeController_1 = require("../../controllers/furniture/wardrobeController");
const wardrobes_1 = require("./validators/wardrobes");
const commonValidators_1 = require("../validators/commonValidators");
const router = express_1.default.Router();
router.get('', wardrobeController_1.getAllWardrobesController);
router.get('/:id', (0, commonValidators_1.mongoIdValidator)(), commonValidators_1.validate, wardrobeController_1.getWardrobesByIdController);
router.post('/', (0, wardrobes_1.wardrobeValidationRules)(), commonValidators_1.validate, wardrobeController_1.createWardrobeController);
router.put('/:id', (0, commonValidators_1.mongoIdValidator)(), (0, wardrobes_1.wardrobeValidationRules)(), commonValidators_1.validate, wardrobeController_1.updateWardrobeController);
router.delete('/:id', (0, commonValidators_1.mongoIdValidator)(), commonValidators_1.validate, wardrobeController_1.deleteWardrobeController);
exports.default = router;
