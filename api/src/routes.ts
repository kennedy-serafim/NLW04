import { Router } from "express";
import { UserController } from "./controllers/UserController";

const userController = new UserController();
const router = Router();

// Users
router.post("/users", userController.create);

export { router };
