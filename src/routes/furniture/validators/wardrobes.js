"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wardrobeValidationRules = void 0;
const commonValidators_1 = require("../../validators/commonValidators");
const wardrobeValidationRules = () => {
    const baseRules = (0, commonValidators_1.baseItemValidationRules)();
    return baseRules;
};
exports.wardrobeValidationRules = wardrobeValidationRules;
