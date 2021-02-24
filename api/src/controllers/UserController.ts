import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/Users";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const userRepository = getRepository(User);
    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User Already exists",
      });
    }

    const user = userRepository.create({
      email,
      name,
    });

    await userRepository.save(user);

    return response.json(user);
  }
}

export { UserController };
