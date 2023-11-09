"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commonRoutes_1 = __importDefault(require("./routes/commonRoutes"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
if (process.env.NODE_ENV !== 'test') {
    app.use((0, morgan_1.default)(':date[iso] :remote-addr :method :url :status :response-time ms - :res[content-length]'));
}
app.use('/api', commonRoutes_1.default);
exports.default = app;
