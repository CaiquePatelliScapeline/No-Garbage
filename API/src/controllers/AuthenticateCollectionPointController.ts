import { Request, Response } from "express";
import { AuthenticateCollectionPointService } from "../services/AuthenticateCollectionPointService";


class AuthenticateCollectionPointController{
    async handle(request: Request, response: Response){
        const {email, password} = request.body;

        const authenticateCollectionPointService = new AuthenticateCollectionPointService();
        const token = await authenticateCollectionPointService.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export {AuthenticateCollectionPointController};