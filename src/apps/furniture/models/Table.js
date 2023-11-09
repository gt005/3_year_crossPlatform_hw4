"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BaseItem_1 = require("./BaseItem");
;
exports.Table = mongoose_1.default.model('Table', BaseItem_1.BaseItemSchema);
