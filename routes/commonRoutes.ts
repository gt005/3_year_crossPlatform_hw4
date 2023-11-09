import express from "express";
import tableRoutes from "./furniture/commonRoutes";

const commonRoutes = express.Router();

commonRoutes.use('/furniture', tableRoutes);

export default commonRoutes;