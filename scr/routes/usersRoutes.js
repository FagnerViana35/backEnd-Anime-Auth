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
import ApiControllers from "../api.externa.controllers/apiControllersListaTotal.js";
import ApiControllersTotal from "../api.externa.controllers/apiControllersListaTotal.js";
import ApiControllersCharacter from "../api.externa.controllers/apiControllersListaCharacter.js";
import ApiControllersEpisode from "../api.externa.controllers/apiControllersListaEpisode.js";
import ApiControllersLocation from "../api.externa.controllers/apiControllersListaLocation.js";

const router = express.Router()

router
    .get("/users", UserListarUsers.listarUsers)
    .get("/users/:id", UserListarPorId.listarUsersPorId)
    .post("/users/register", MiddlewareRegister.middlewareRegisterUser, UserRegisterUser.registerUser)
    .put("/users/:id", UserControllersAtualiza.atualizarUser)
    .delete("/users/:id", UserControllerRemover.removerUserPorId)
    .post("/users/login", MiddlewaresAutentica.middlewareAuthenticUser, UserAutentica.authUser)
    
    .get("/desenho/api", ApiControllersTotal.listaApiExternaTotal)
    .get("/desenho/api/character", ApiControllersCharacter.listaApiExternaCharacter)
    .get("/desenho/api/episode", ApiControllersEpisode.listaApiExternaEpisode)
    .get("/desenho/api/location", ApiControllersLocation.listaApiExternaLocation)

export default router;
//https://expressjs.com/pt-br/guide/routing.html
//https://www.youtube.com/watch?v=Ntgs4gVYB9A&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=25