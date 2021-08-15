import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { CollectionPointsRepositories } from "../repositories/CollectionPointsRepositories";

interface ICollectionPointsRequest{
    corporate_name: string;
    cnpj: string;
    email: string;
    password: string;
    phone?: string;
    responsible?: string;
    image_url?: string;
    address: string;
    waste_list: string;
}

class CreateCollectionPointService{
    async execute({corporate_name, cnpj, email, password, phone, responsible, image_url, address, waste_list}: ICollectionPointsRequest){
        const collectionPointsRepository = getCustomRepository(CollectionPointsRepositories);
        const emailVerify = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const cnpjVerify =
        // const phoneVerify =
        const hashRounds = 8; //Trocar para .env

        if(!corporate_name){
            throw new Error("Unfilled corporate name");
        }

        if(!email){
            throw new Error("Unfilled email");
        }

        if(!emailVerify.test(String(email).toLowerCase())){
            throw new Error("Email incorrect");
        }

        if(!cnpj){
            throw new Error("Unfilled cnpj");
        }

        // if(!cnpjVerify.test(String(cnpj).toLowerCase())){
        //     throw new Error("CNPJ incorrect");
        // }

        // if(phone){
        //     if(!phoneVerify.test(String(phone).toLowerCase())){
        //         throw new Error("Phone incorrect");
        //     }
        // }


        const collectionPointAlreadyExists = await collectionPointsRepository.findOne({
            email,
            cnpj
        });

        if(collectionPointAlreadyExists){
            throw new Error("Collection point already exists"); 
        }


        const passwordHash = await hash(password, hashRounds);

        
        const collectionPoint = collectionPointsRepository.create({
            corporate_name,
            cnpj,
            email,
            password: passwordHash,
            phone,
            responsible,
            image_url,
            address,
            waste_list
        });

        await collectionPointsRepository.save(collectionPoint);

        return collectionPoint;
    }
}

export {CreateCollectionPointService};