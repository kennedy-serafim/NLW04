import { Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

// Users
router.post("/users", userController.create);

// Surveys
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };
