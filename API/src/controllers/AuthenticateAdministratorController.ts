import { Request, Response } from "express";
import { AuthenticateAdministratorService } from "../services/AuthenticateAdministratorService";


class AuthenticateAdministratorController{
    async handle(request: Request, response: Response){
        const {user_name, password} = request.body;

        const authenticateAdministratorService = new AuthenticateAdministratorService();
        const token = await authenticateAdministratorService.execute({
            user_name,
            password,
        });

        return response.json(token);
    }
}

export {AuthenticateAdministratorController};