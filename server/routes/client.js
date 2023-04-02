import express from "express";
import { getProducts, getCustomers, getTransaction } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransaction);

export default router;
