import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { AdministratorsRepositories } from "../repositories/AdministratorsRepositories"

interface IAdministratorRequest{
    user_name: string;
    password: string;
}

class CreateAdministratorService{
    async execute({user_name, password}: IAdministratorRequest){
        const administratorRepository = getCustomRepository(AdministratorsRepositories);
        const hashRounds = 8; //mudar para .env

        if(!user_name){
            throw new Error("Unfilled user name");
        }

        const administratorAlreadyExists = await administratorRepository.findOne({
            user_name,
        });

        if(administratorAlreadyExists){
            throw new Error("Administrator already exists");
        }


        const passwordHash = await hash(password, hashRounds);

        const administrator = administratorRepository.create({
            user_name,
            password: passwordHash
        });

        await administratorRepository.save(administrator);

        return administrator;
    }
}

export {CreateAdministratorService}