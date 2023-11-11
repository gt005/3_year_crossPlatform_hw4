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
exports.chairDelete = exports.chairUpdate = exports.chairCreate = void 0;
const Chair_1 = require("../models/Chair");
const chairCreate = (chairData) => __awaiter(void 0, void 0, void 0, function* () {
    const chair = new Chair_1.Chair(chairData);
    yield chair.save();
    return chair;
});
exports.chairCreate = chairCreate;
const chairUpdate = (id, chairData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedChair = yield Chair_1.Chair.findByIdAndUpdate(id, chairData, { new: true });
    return updatedChair;
});
exports.chairUpdate = chairUpdate;
const chairDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedDocument = yield Chair_1.Chair.findByIdAndDelete(id);
    if (!deletedDocument) {
        return false;
    }
    return true;
});
exports.chairDelete = chairDelete;
