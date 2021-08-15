import { getCustomRepository } from "typeorm";
import {classToPlain} from "class-transformer";

import { CollectionPointsRepositories } from "../repositories/CollectionPointsRepositories";

class ListCollectionPointsService{
    async execute(){
        const collectionPointsRepositories = getCustomRepository(CollectionPointsRepositories);
        const collectionPoints = await collectionPointsRepositories.find();
        
        return classToPlain(collectionPoints); // Usa a biblioteca class-transformer pra remover a senha da listagem -- precisa de alteração na entidade
    }
}

export {ListCollectionPointsService};