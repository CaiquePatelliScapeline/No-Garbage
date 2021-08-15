import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if(!authToken){
        return response.status(401).end();
    }

    // Validar se token é valido
    // Formato do token: Bearer token
    const [, token] = authToken.split(" "); //cortar a string do token no espaço
    
    try{
        const {sub} = verify(token, "5c8edc3221a737054d5a94a1b8197e2c") as IPayload;

        request.user_id = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }

    // Recuperar informações do usuário

    
}