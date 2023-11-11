"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tableRoutes_1 = __importDefault(require("./tableRoutes"));
const chairRoutes_1 = __importDefault(require("./chairRoutes"));
const wardrobeRoutes_1 = __importDefault(require("./wardrobeRoutes"));
const commonRoutes = express_1.default.Router();
commonRoutes.use('/tables', tableRoutes_1.default);
commonRoutes.use('/chairs', chairRoutes_1.default);
commonRoutes.use('/wardrobes', wardrobeRoutes_1.default);
exports.default = commonRoutes;
