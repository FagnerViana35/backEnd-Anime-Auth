import api from "../../api_externa.js";

class ApiControllersLocation{
    static listaApiExternaLocation = async (resquest, response) => {
        const res = await api.get('/location')
        let data = res.data;
        try {
            response.status(200).json({ msg: "Dados da api Localização : ", data });

        }catch (err) {
            response.status(403).send({ message: "Erro ao fazer o login" });
        }
    }
}

export default ApiControllersLocation;


//"location": "https://rickandmortyapi.com/api/location"