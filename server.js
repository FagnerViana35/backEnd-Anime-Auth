import 'dotenv/config'; 
import app from "./scr/app.js"

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})

///Nome tabela users
//senha: 3014665
// nome: fagner 