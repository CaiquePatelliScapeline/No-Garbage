import {Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("plans")
class Plan {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    plan: string;

    @Column()
    price: number;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Plan};