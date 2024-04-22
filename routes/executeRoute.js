import express from "express";
import execute from "../controllers/executionController.js";

const executeRouter = express.Router();

executeRouter.post('/',execute);

export default executeRouter;