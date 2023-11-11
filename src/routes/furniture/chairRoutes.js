"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chairController_1 = require("../../controllers/furniture/chairController");
const chairs_1 = require("./validators/chairs");
const commonValidators_1 = require("../validators/commonValidators");
const router = express_1.default.Router();
router.get('', chairController_1.getAllChairsController);
router.get('/:id', (0, commonValidators_1.mongoIdValidator)(), commonValidators_1.validate, chairController_1.getChairsByIdController);
router.post('/', (0, chairs_1.chairValidationRules)(), commonValidators_1.validate, chairController_1.createChairController);
router.put('/:id', (0, commonValidators_1.mongoIdValidator)(), (0, chairs_1.chairValidationRules)(), commonValidators_1.validate, chairController_1.updateChairController);
router.delete('/:id', (0, commonValidators_1.mongoIdValidator)(), commonValidators_1.validate, chairController_1.deleteChairController);
exports.default = router;
