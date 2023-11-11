"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTableController = exports.updateTableController = exports.createTableController = exports.getAllTablesController = exports.getTablesByIdController = void 0;
const tables_1 = require("../../apps/furniture/selectors/tables");
const tables_2 = require("../../apps/furniture/services/tables");
const express_validator_1 = require("express-validator");
const getTablesByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const table = yield (0, tables_1.tableGetById)(req.params.id);
        if (!table) {
            return res.status(404).send(`Table with id=${req.params.id} not found.`);
        }
        res.json(table);
    }
    catch (error) {
        next(error);
    }
});
exports.getTablesByIdController = getTablesByIdController;
const getAllTablesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tables = yield (0, tables_1.tableGetAll)();
    res.json(tables);
});
exports.getAllTablesController = getAllTablesController;
const createTableController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const table = yield (0, tables_2.tableCreate)(req.body);
    res.status(201).json(table);
});
exports.createTableController = createTableController;
const updateTableController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const table = yield (0, tables_2.tableUpdate)(req.params.id, req.body);
    if (!table) {
        return res.status(404).send(`Table with id=${req.params.id} not found.`);
    }
    res.json(table);
});
exports.updateTableController = updateTableController;
const deleteTableController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const success = yield (0, tables_2.tableDelete)(req.params.id);
    if (!success) {
        return res.status(404).send(`Table with id=${req.params.id} not found.`);
    }
    res.status(204).send();
});
exports.deleteTableController = deleteTableController;
