import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("administrators")
class Administrator {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_name: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    admin_level: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Administrator};