import { getCustomRepository } from "typeorm";
import {classToPlain} from "class-transformer";

import { AdministratorsRepositories } from "../repositories/AdministratorsRepositories";

class ListAdministratosService{
    async execute(){
        const administratorsRepositories = getCustomRepository(AdministratorsRepositories);
        const administrators = await administratorsRepositories.find();
        
        return classToPlain(administrators); // Usa a biblioteca class-transformer pra remover a senha da listagem -- precisa de alteração na entidade
    }
}

export {ListAdministratosService};