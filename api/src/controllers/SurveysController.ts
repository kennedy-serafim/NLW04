import { Request, Response } from "express";
import { getCustomRepository, ObjectType, Repository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
  /**
   *
   * @param request
   * @param response
   */
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const surveys = surveysRepository.create({ title, description });

    await surveysRepository.save(surveys);

    return response.status(201).json(surveys);
  }

  /**
   *
   * @param request
   * @param response
   */
  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const all = await surveysRepository.find();

    return response.json(all);
  }
}

export { SurveysController };
