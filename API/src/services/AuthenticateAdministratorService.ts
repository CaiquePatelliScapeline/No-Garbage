import { getCustomRepository } from "typeorm";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

import { AdministratorsRepositories } from "../repositories/AdministratorsRepositories";


interface IAuthenticateRequest {
    user_name: string;
    password: string;
}

class AuthenticateAdministratorService {
    async execute({user_name, password}: IAuthenticateRequest) {
        const administratorsRepositories = getCustomRepository(AdministratorsRepositories);
        
        //Verificar se o nome de usuario existe
        const administrator = await administratorsRepositories.findOne({
            user_name,
        });

        if(!administrator){
            throw new Error("User/Password incorrect");
        }

        //Verificar se a senha está correta
        const passwordMatch = await compare(password, administrator.password)

        if(!passwordMatch){
            throw new Error("User/Password incorrect");
        }

        //Gerar token
        const token = sign({
            user_name: administrator.user_name
        }, "5c8edc3221a737054d5a94a1b8197e2c", { // transformar em .env
            subject: administrator.id,
            expiresIn: "1h"
        }); 

        return token;
    }
}

export {AuthenticateAdministratorService};