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
exports.tableDelete = exports.tableUpdate = exports.tableCreate = void 0;
const Table_1 = require("../models/Table");
const tableCreate = (tableData) => __awaiter(void 0, void 0, void 0, function* () {
    const table = new Table_1.Table(tableData);
    yield table.save();
    return table;
});
exports.tableCreate = tableCreate;
const tableUpdate = (id, tableData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTable = yield Table_1.Table.findByIdAndUpdate(id, tableData, { new: true });
    return updatedTable;
});
exports.tableUpdate = tableUpdate;
const tableDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedDocument = yield Table_1.Table.findByIdAndDelete(id);
    console.log(deletedDocument);
    if (!deletedDocument) {
        return false;
    }
    return true;
});
exports.tableDelete = tableDelete;
