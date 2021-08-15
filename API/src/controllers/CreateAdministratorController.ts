import { Request, Response } from "express";
import { CreateAdministratorService } from "../services/CreateAdministratorService";

class CreateAdministratorController{
    async handle(request: Request, response: Response){
        const {user_name, password} = request.body;
        const createAdministratorService = new CreateAdministratorService();
        const client = await createAdministratorService.execute({user_name, password});

        return response.json(client);
    }
}

export {CreateAdministratorController};