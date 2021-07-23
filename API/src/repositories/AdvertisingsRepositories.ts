import { EntityRepository, Repository } from "typeorm";
import { Advertising } from "../entities/Advertising";

@EntityRepository(Advertising)
class AdvertisingsRepositories extends Repository<Advertising>{
}

export {AdvertisingsRepositories};