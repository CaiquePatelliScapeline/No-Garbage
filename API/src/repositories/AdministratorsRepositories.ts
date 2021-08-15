import { EntityRepository, Repository } from "typeorm";
import { Administrator } from "../entities/Administrator";

@EntityRepository(Administrator)
class AdministratorsRepositories extends Repository<Administrator>{
}

export {AdministratorsRepositories};