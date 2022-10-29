import users from "../models/User.js";

class UserControllerRemover {

    static removerUserPorId = async (request, response) =>{

        const id = request.params.id;
        
        
        console.log(id)
        users.findByIdAndDelete({_id: id }, (err) => {

            if(err) return response.status(400).json({
                error: true,
                message: "Error: Usuário não foi apagado com sucesso!"
            });

            if(id === " ") response.json({
                error: true,
                message: "Error: Usuário não foi apagado com sucesso!"
            });
    
            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return response.json({
                error: false,
                message: "Usuário apagado com sucesso!"
            });
        })
    }
    
} 

export default UserControllerRemover;