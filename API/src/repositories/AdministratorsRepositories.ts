import { EntityRepository, Repository } from "typeorm";
import { Administrator } from "../entities/Administrator";

@EntityRepository(Administrator)
class AdminitratorsRepositories extends Repository<Administrator>{
}

export {AdminitratorsRepositories};