import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AdministratorsRepositories } from "../repositories/AdministratorsRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const {user_id} = request;
    const administratorsRepositories = getCustomRepository(AdministratorsRepositories);
    const {user_name} = await administratorsRepositories.findOne(user_id);

    //verificar administrador existe
    if(user_name){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized!",
    });
}