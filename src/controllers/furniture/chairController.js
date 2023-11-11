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
exports.deleteChairController = exports.updateChairController = exports.createChairController = exports.getAllChairsController = exports.getChairsByIdController = void 0;
const chairs_1 = require("../../apps/furniture/selectors/chairs");
const chair_1 = require("../../apps/furniture/services/chair");
const express_validator_1 = require("express-validator");
const getChairsByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chair = yield (0, chairs_1.chairGetById)(req.params.id);
        if (!chair) {
            return res.status(404).send(`Chair with id=${req.params.id} not found.`);
        }
        res.json(chair);
    }
    catch (error) {
        next(error);
    }
});
exports.getChairsByIdController = getChairsByIdController;
const getAllChairsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const chairs = yield (0, chairs_1.chairGetAll)();
    res.json(chairs);
});
exports.getAllChairsController = getAllChairsController;
const createChairController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const chair = yield (0, chair_1.chairCreate)(req.body);
    res.status(201).json(chair);
});
exports.createChairController = createChairController;
const updateChairController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const chair = yield (0, chair_1.chairUpdate)(req.params.id, req.body);
    if (!chair) {
        return res.status(404).send(`Chair with id=${req.params.id} not found.`);
    }
    res.json(chair);
});
exports.updateChairController = updateChairController;
const deleteChairController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const success = yield (0, chair_1.chairDelete)(req.params.id);
    if (!success) {
        return res.status(404).send(`Chair with id=${req.params.id} not found.`);
    }
    res.status(204).send();
});
exports.deleteChairController = deleteChairController;
