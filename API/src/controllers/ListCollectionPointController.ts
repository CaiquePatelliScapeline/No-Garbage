import { Request, Response } from "express";
import { ListCollectionPointsService } from "../services/ListCollectionPointsService";

class ListCollectionPointController{
    async handle(request: Request, response: Response){
        const listCollectionPointsService = new ListCollectionPointsService();
        const collectionPoints = await listCollectionPointsService.execute();

        return response.json(collectionPoints);
    }
}

export {ListCollectionPointController};