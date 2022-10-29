import api from "../../api_externa.js";

class ApiControllersCharacter{
    static listaApiExternaCharacter = async (resquest, response) => {
        const res = await api.get('/character')
        let data = res.data;
        try {
            response.status(200).json({ msg: "Dados da api Characteristicas dos personagens:", data });

        }catch (err) {
            response.status(403).send({ message: "Erro ao fazer o login" });
        }
    }
}

export default ApiControllersCharacter;


// "characters": "https://rickandmortyapi.com/api/character"
