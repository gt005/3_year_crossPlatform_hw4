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
exports.deleteWardrobeController = exports.updateWardrobeController = exports.createWardrobeController = exports.getAllWardrobesController = exports.getWardrobesByIdController = void 0;
const wardrobes_1 = require("../../apps/furniture/selectors/wardrobes");
const wardrobes_2 = require("../../apps/furniture/services/wardrobes");
const express_validator_1 = require("express-validator");
const getWardrobesByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wardrobe = yield (0, wardrobes_1.wardrobeGetById)(req.params.id);
        if (!wardrobe) {
            return res.status(404).send(`Wardrobe with id=${req.params.id} not found.`);
        }
        res.json(wardrobe);
    }
    catch (error) {
        next(error);
    }
});
exports.getWardrobesByIdController = getWardrobesByIdController;
const getAllWardrobesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const wardrobes = yield (0, wardrobes_1.wardrobeGetAll)();
    res.json(wardrobes);
});
exports.getAllWardrobesController = getAllWardrobesController;
const createWardrobeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const wardrobe = yield (0, wardrobes_2.wardrobeCreate)(req.body);
    res.status(201).json(wardrobe);
});
exports.createWardrobeController = createWardrobeController;
const updateWardrobeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const wardrobe = yield (0, wardrobes_2.wardrobeUpdate)(req.params.id, req.body);
    if (!wardrobe) {
        return res.status(404).send(`Wardrobe with id=${req.params.id} not found.`);
    }
    res.json(wardrobe);
});
exports.updateWardrobeController = updateWardrobeController;
const deleteWardrobeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const success = yield (0, wardrobes_2.wardrobeDelete)(req.params.id);
    if (!success) {
        return res.status(404).send(`Wardrobe with id=${req.params.id} not found.`);
    }
    res.status(204).send();
});
exports.deleteWardrobeController = deleteWardrobeController;
