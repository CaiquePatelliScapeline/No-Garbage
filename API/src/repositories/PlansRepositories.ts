import { EntityRepository, Repository } from "typeorm";
import { Plan } from "../entities/Plan";

@EntityRepository(Plan)
class PlansRepositories extends Repository<Plan>{
}

export {PlansRepositories};