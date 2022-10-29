import api from "../../api_externa.js";

class ApiControllersTotal{
    static listaApiExternaTotal = async (resquest, response) => {
        const res = await api.get('/')
        let data = res.data;
        try {
            response.status(200).json({ msg: "Dados total da api: ", data });

        }catch (err) {
            response.status(403).send({ message: "Erro ao fazer o login" });
        }
    }
}

export default ApiControllersTotal;


// "characters": "https://rickandmortyapi.com/api/"


