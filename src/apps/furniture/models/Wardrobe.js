"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wardrobe = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BaseItem_1 = require("./BaseItem");
;
exports.Wardrobe = mongoose_1.default.model('Wardrobe', BaseItem_1.BaseItemSchema);
