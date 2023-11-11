"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableValidationRules = void 0;
const commonValidators_1 = require("../../validators/commonValidators");
const tableValidationRules = () => {
    // Сделано так, потому что не хочу считать и работать с этими моделями как с полиморфными
    // (то есть не хочу, чтобы один и тот же валидатор был для каждой модели)
    const baseRules = (0, commonValidators_1.baseItemValidationRules)();
    return baseRules;
};
exports.tableValidationRules = tableValidationRules;
