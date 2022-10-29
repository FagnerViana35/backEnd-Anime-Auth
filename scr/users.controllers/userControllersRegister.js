import users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserRegisterUser {
    static registerUser = async (request, response) =>{
        const { name, username, password } = request.body;

        //criar passaword
        const saltRound = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, saltRound) 
        
        // criar user
        const user = new users({
            name,
            username,
            password: passwordHash,
        });
        
        try {
            // const secret = '510b12ff2dbb6042d58766ec8c131552';
            // const token = jwt.sign({id: user._id}, secret, {expiresIn: 86400,});

            await user.save();
            user.password = undefined;
            // response.status(201).json({ msg: "Usuário criado com sucesso!", user, auth: true, token});
            response.status(201).json({ msg: "Usuário criado com sucesso!", user});
        }catch (error) {
            response.status(500).send({ msg: error });
        }
    }
}
export default UserRegisterUser;