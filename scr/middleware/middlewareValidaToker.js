import jwt from "jsonwebtoken";
import expiresInToken from "../config/config.js";

class MiddlewareValidarToken {
    static async middlewareValidarToken( request, response, next){
        const authHeader = request.headers["authorization"];//Pegando a authorization no headers 
        //const parts = authHeader && authHeader.split(" ")[1];// pegando a segunda parte do token
        //const authHeader = request.headers.authorization;

        if(!authHeader){
            return response.status(401).json({error: `Nenhum token fornecido!`})
        }

        const parts = authHeader.split(" ");

        if(!parts.length === 2){
            return response.status(401).json({error: 'Token error!'});
        }

        const [scheme, token] = parts;
        if(!/^Bearer$/i.test(scheme)){
            return response.status(401).json({error: 'Token com mau formatado!'});
        }
        
        jwt.verify(token, expiresInToken.secret, (err, decoded) => {
            if(err){ 
                return response.status(401).json({error: 'Token invalido!'});
            }
            
            request.userId = decoded.id;
            // request.headers['session'] = request.userId;
            next()
        });

        
        
    };
}
export default MiddlewareValidarToken;