import { EntityRepository, Repository } from "typeorm";
import { Cupon } from "../entities/Cupon";

@EntityRepository(Cupon)
class CuponsRepositories extends Repository<Cupon>{
}

export {CuponsRepositories};