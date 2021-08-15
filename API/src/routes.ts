import { Router } from "express";

import { AuthenticateAdministratorController } from "./controllers/AuthenticateAdministratorController";
import { AuthenticateCollectionPointController } from "./controllers/AuthenticateCollectionPointController";

import { CreateAdministratorController } from "./controllers/CreateAdministratorController";
import { CreateCollectionPointController } from "./controllers/CreateCollectionPointController";

import { ListCollectionPointController } from "./controllers/ListCollectionPointController";
import { ListAdminitratorsController } from "./controllers/ListAdministratorController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const authenticateCollectionPointController = new AuthenticateCollectionPointController();
const authenticateAdministratorController = new AuthenticateAdministratorController();

const createCollectionPointController = new CreateCollectionPointController();
const createAdministratorController = new CreateAdministratorController();

const listCollectionPointController = new ListCollectionPointController();
const listAdminitratorsController = new ListAdminitratorsController();



router.post("/login" , authenticateCollectionPointController.handle); //Autenticação de pontos de coleta
router.post("/admin-login", authenticateAdministratorController.handle) //Autenticação de administrador
router.post("/collectionpoints", createCollectionPointController.handle); //Criação de pontos de coleta
router.post("/administrators", createAdministratorController.handle); //Criação de administrador
router.post("/administrators", ensureAuthenticated, ensureAdmin, createAdministratorController.handle); //Criação de administrador

router.get("/collectionpoints", listCollectionPointController.handle); //Listar pontos de coleta
router.get("/administrators", ensureAuthenticated, ensureAdmin, listAdminitratorsController.handle);

export {router};