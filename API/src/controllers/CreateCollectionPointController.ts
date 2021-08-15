import { Request, Response } from "express";
import { CreateCollectionPointService } from "../services/CreateCollectionPointService";

class CreateCollectionPointController{
    async handle(request: Request, response: Response){
        const {corporate_name, cnpj, email, password, phone, responsible, image_url, address, waste_list} = request.body;
        const createCollectionPointService = new CreateCollectionPointService();
        const collectionPoint = await createCollectionPointService.execute({corporate_name, cnpj, email, password, phone, responsible, image_url, address, waste_list});

        return response.json(collectionPoint);
    }
}

export {CreateCollectionPointController};