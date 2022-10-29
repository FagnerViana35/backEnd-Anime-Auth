import mongoose from "mongoose";

//const dbUser = process.env.USER;
//const dbPassword = process.env.PASS;
var mongoDB = process.env.URL_BD;
console.log(mongoDB)

mongoose.connect(mongoDB, { useNewUrlParser: true });
//mongoose.connect(`mongodb+srv://bd-curso-pw4-api:28061988@curso-pw4-api.77o6bu8.mongodb.net/db-curso-pw3`)

    
let bd = mongoose.connection;

export default bd;


//https://cloud.mongodb.com/v2/626713d1c1641a0c9563d21a#metrics/replicaSet/630a28392045503de6d1f969/explorer/bd-api-node/users/find
//mongoose.connect(`mongodb+srv://bd-curso-pw4-api:28061988@curso-pw4-api.77o6bu8.mongodb.net/db-curso-pw3
// mongodb+srv://bd-api-node:<password>@apinode01.phdrg9h.mongodb.net/?retryWrites=true&w=majority
//fagnerviana@gmail.com.br
//28061988
//fagnerviana
