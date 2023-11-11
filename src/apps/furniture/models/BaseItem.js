"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BaseItemSchema = new mongoose_1.Schema({
    size: { type: String, required: true },
    material: { type: String, required: true },
    color: {
        name: { type: String, require: true },
        hexCode: { type: String, require: true },
    },
    quantityInStock: { type: Number, default: 0 },
    cost: { type: Number, required: true },
    description: { type: String, null: true },
    image: { type: String, null: true }
});
