import { Request, Response } from "express";
import { ListAdministratosService } from "../services/ListAdministratorsService";

class ListAdminitratorsController{
    async handle(request: Request, response: Response){
        const listAdministratosService = new ListAdministratosService();
        const administrators = await listAdministratosService.execute();

        return response.json(administrators);
    }
}

export {ListAdminitratorsController};