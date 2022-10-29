import api from "../../api_externa.js";

class ApiControllersEpisode{
    static listaApiExternaEpisode = async (resquest, response) => {
        const res = await api.get('/episode')
        let data = res.data;
        try {
            response.status(200).json({ msg: "Dados da api Episodios: ", data });

        }catch (err) {
            response.status(403).send({ message: "Erro ao fazer o login" });
        }
    }
}

export default ApiControllersEpisode;


// "episode": "https://rickandmortyapi.com/api/episode"