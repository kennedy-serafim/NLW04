import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const surveys = surveysRepository.create({ title, description });

    await surveysRepository.save(surveys);

    return response.status(201).json(surveys);
  }
}

export { SurveysController };
