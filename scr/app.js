import express from "express";
import bd from "./config/bdConnect.js";
import routes from "./routes/index.js";
import chalk from "chalk";
import cors from "cors";
import  i18n from "i18n";
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config()

bd.on("error", console.log.bind(console, chalk.red('Erro de conexão: ')));
bd.once("open", ()=>{console.log(chalk.green('Conexão com o banco feita com sucesso'))});


const app = express();

app.use(cookieParser())

app.use(i18n.init);

app.use(bodyParser.json());

app.use(cors())

app.use((req,res,next) =>{
    console.log(req.acceptsLanguages())
    const idiomas = req.acceptsLanguages()[0];
    req.setLocale(idiomas);
    res.setLocale(idiomas);
    next();
})

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    next();
});

i18n.configure(
    {
        locales:["pt-BR", "en"],
        defaultLocale:["pt-BR"],
        directory: "./locales",
        extension: ".js",
        cookie: "lang"
    }
)

routes(app);

export default app;

