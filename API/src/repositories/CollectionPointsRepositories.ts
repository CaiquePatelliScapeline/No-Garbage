import { EntityRepository, Repository } from "typeorm";
import { CollectionPoint } from "../entities/CollectionPoint";

@EntityRepository(CollectionPoint)
class CollectionPointsRepositories extends Repository<CollectionPoint>{
}

export {CollectionPointsRepositories};