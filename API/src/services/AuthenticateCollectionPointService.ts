import { getCustomRepository } from "typeorm";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

import { CollectionPointsRepositories } from "../repositories/CollectionPointsRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateCollectionPointService {
    async execute({email, password}: IAuthenticateRequest) {
        const collectionPointsRepositories = getCustomRepository(CollectionPointsRepositories);
        
        //Verificar se o email existe
        const collectionPoint = await collectionPointsRepositories.findOne({
            email,
        });

        if(!collectionPoint){
            throw new Error("Email/Password incorrect");
        }

        //Verificar se a senha está correta
        const passwordMatch = await compare(password, collectionPoint.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //Gerar token
        const token = sign({
            email: collectionPoint.email
        }, "5c8edc3221a737054d5a94a1b8197e2c", { // transformar em .env
            subject: collectionPoint.id,
            expiresIn: "1h"
        }); 

        return token;
    }
}

export {AuthenticateCollectionPointService};