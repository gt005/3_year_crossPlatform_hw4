"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commonRoutes_1 = __importDefault(require("./furniture/commonRoutes"));
const commonRoutes = express_1.default.Router();
commonRoutes.use('/furniture', commonRoutes_1.default);
exports.default = commonRoutes;
