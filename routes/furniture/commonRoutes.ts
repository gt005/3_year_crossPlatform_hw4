import express from "express";
import tableRoutes from "./tableRoutes";

const commonRoutes = express.Router();

commonRoutes.use('/tables', tableRoutes);

export default commonRoutes;