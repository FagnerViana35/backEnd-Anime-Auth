import expiresInToken from "../config/config.js";
import users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserAutentica {
    static authUser = async (request, response) => {
        users.findOne({ username: request.body.username }, (err, user) => {
            if (err) return response.status(500).send('Ocorreu um erro inesperado no servidor.');
            if (!user) return response.status(404).send('Usuário não encontrato.');
       
            var passwordIsValid = bcrypt.compareSync(request.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
       
            var token = jwt.sign({ id: user._id }, expiresInToken.secret, {
              expiresIn: expiresInToken.expiresIn //Tempo que expira a chave
            });
            response.status(200).send({msg: 'Usuário autenticado com sucesso', auth: true, token: token });
          });
    }
}

export default UserAutentica;
