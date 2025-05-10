
import express from 'express'
import { createAOrder , getOrderByEmail } from './order.controller.js';

const orderRoutes =  express.Router();

// create order endpoint
orderRoutes.post("/", createAOrder);

// get orders by user email 
orderRoutes.get("/email/:email", getOrderByEmail);

export default orderRoutes;