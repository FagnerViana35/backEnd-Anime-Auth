import express from "express";
import UserListarPorId from "../users.controllers/userControllersListaPorId.js";
import UserListarUsers from "../users.controllers/userControllersLista.js";
import UserRegisterUser from "../users.controllers/userControllersRegister.js";
import UserAutentica from "../users.controllers/userControllersAutentica.js";
import UserControllersAtualiza from "../users.controllers/userControllersAtualiza.js";
import UserControllerRemover from "../users.controllers/userControllersRemover.js";
import MiddlewaresAutentica from "../middleware/middlewareAutentica.js";
import MiddlewareRegister from "../middleware/middlewareRegister.js";
import MiddlewareValidarToken from "../middleware/middlewareValidaToker.js";
import ApiControllersTotal from "../api.externa.controllers/apiControllersListaTotal.js";


const router = express.Router()

router
    .get("/users", MiddlewareValidarToken.middlewareValidarToken, UserListarUsers.listarUsers)
    .get("/users/:id", MiddlewareValidarToken.middlewareValidarToken, UserListarPorId.listarUsersPorId)
    .post("/users/register", MiddlewareRegister.middlewareRegisterUser, UserRegisterUser.registerUser)
    .put("/users/:id", MiddlewareValidarToken.middlewareValidarToken, UserControllersAtualiza.atualizarUser)
    .delete("/users/:id", MiddlewareValidarToken.middlewareValidarToken, UserControllerRemover.removerUserPorId)
    .post("/users/login", MiddlewaresAutentica.middlewareAuthenticUser, UserAutentica.authUser)
    
    .get("/anime/api", ApiControllersTotal.listaApiExternaTotal)

export default router;
//https://expressjs.com/pt-br/guide/routing.html
//https://www.youtube.com/watch?v=Ntgs4gVYB9A&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=25