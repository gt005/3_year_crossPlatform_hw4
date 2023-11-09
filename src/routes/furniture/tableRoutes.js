"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tableController_1 = require("../../controllers/furniture/tableController");
const tables_1 = require("./validators/tables");
const commonValidators_1 = require("../validators/commonValidators");
const router = express_1.default.Router();
router.get('', tableController_1.getAllTablesController);
router.get('/:id', (0, commonValidators_1.mongoIdValidator)(), commonValidators_1.validate, tableController_1.getTablesByIdController);
router.post('/', (0, tables_1.tableValidationRules)(), commonValidators_1.validate, tableController_1.createTableController);
router.put('/:id', (0, commonValidators_1.mongoIdValidator)(), (0, tables_1.tableValidationRules)(), commonValidators_1.validate, tableController_1.updateTableController);
router.delete('/:id', (0, commonValidators_1.mongoIdValidator)(), commonValidators_1.validate, tableController_1.deleteTableController);
exports.default = router;
