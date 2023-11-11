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
exports.wardrobeDelete = exports.wardrobeUpdate = exports.wardrobeCreate = void 0;
const Wardrobe_1 = require("../models/Wardrobe");
const wardrobeCreate = (wardrobeData) => __awaiter(void 0, void 0, void 0, function* () {
    const wardrobe = new Wardrobe_1.Wardrobe(wardrobeData);
    yield wardrobe.save();
    return wardrobe;
});
exports.wardrobeCreate = wardrobeCreate;
const wardrobeUpdate = (id, wardrobeData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedWardrobe = yield Wardrobe_1.Wardrobe.findByIdAndUpdate(id, wardrobeData, { new: true });
    return updatedWardrobe;
});
exports.wardrobeUpdate = wardrobeUpdate;
const wardrobeDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedDocument = yield Wardrobe_1.Wardrobe.findByIdAndDelete(id);
    if (!deletedDocument) {
        return false;
    }
    return true;
});
exports.wardrobeDelete = wardrobeDelete;
