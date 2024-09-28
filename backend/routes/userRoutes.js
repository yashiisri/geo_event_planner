import express from 'express';
import { login, logout, register } from '../controllers/userController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

// User registration
router.route("/register").post(register);

// User login
router.route("/login").post(login);

// User logout
router.route("/logout").get(isAuthenticated, logout);

// You can add more user-related routes as needed, like profile retrieval, etc.

export default router;
