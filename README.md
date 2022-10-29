# Primeira parte do projeto backend
# Link do Github
https://github.com/FagnerViana35/exercicio-node-back

# O projeto é um crud que contem

Criar um Usuário
Listar um Usuário
Listar um Usuário com id 
Editar um Usuário existente
Deletar um Usuário existente
# Logar um Usuário existente

# Foi usado um banco NoSql Mongo Database
# URL do banco
mongodb://localhost:27017

# Dados da .env
PASS=28061988
PORT=3000
SECRET=510b12ff2dbb6042d58766ec8c131552
URL_BD=mongodb://localhost:27017

# Informações sobre a conexão com o banco
O banco esta configurado de maneira local com a criação da tabela de forma automatica, assim 
que o primeiro usuário for inserido. 
Para banco usar terá que baixar o mongodb em sua maquina local
e instalar no vs code usando o comando 'npm i mongodb'

# nome de acesso ao banco
fagner
# senha
3014665

# Funcionalidade opcional
# Dados do banco Mongodb de forma remota conectado com a AWS
# URL do Mongo Atlas:
https://cloud.mongodb.com/v2/626713d1c1641a0c9563d21a#metrics/replicaSet/630a28392045503de6d1f969/explorer/bd-api-node/users/find

# Link de conexão com o sistema de cloud para a AWS service.
mongoose.connect(`mongodb+srv://bd-curso-pw4-api:28061988@curso-pw4-api.77o6bu8.mongodb.net/db-curso-pw3

# Email que usei para cadastro
fagnerviana@gmail.com.br

# nome de usuário 
fagnerviana


# senha do banco
28061988

# nome do banco
bd-curso-pw4-api

# Se caso precise instalar o Mongo db

# MongoDB Community Server:
https://www.mongodb.com/try/download/community

# MongoDB Shell (mongosh):
https://www.mongodb.com/try/download/shell

# MongoDB Database Tools (100):
https://www.mongodb.com/try/download/database-tools

# Git Bash:
https://gitforwindows.org/

# API a ser consumida será 
# Base url: https://rickandmortyapi.com/api

# https://rickandmortyapi.com/api
 {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
 }




# Dados criados ao inserir um usuário
 Schema da tabela User
 id é criado de forma automática pelo Mongodb
 name é obrigatorio
 password é obrigatorio  
 createdAt é default

# Scripts da tabela User
{
  "_id": {
    "$oid": "635ac2362df0a87c5dd87a40"
  },
  "name": "gabriel viana",
  "username": "gabriel@fagner.com",
  "password": "$2b$12$SH3dcoqN3/UQIdb3h504S.Bb5y2WJzmB.UeZ.gD1y.LSHGU4PZUR2",
  "createdAt": {
    "$date": "2022-10-27T17:39:02.503Z"
  },
  "__v": 0
}

# Utilização do Projeto

Após instalação o Mongodb ou algum APP que reconheça o scripts NoSQL do MongoDB se caso não tiver, deve-se dar o comando no Visual Studio Code: 
 npm i mongodb no terminal do vs code para visualizar as tabelas

 Também tem a possibilidade de acessar pelo Cloud da AWS com os dados acima.

Após isso é só testar os verbos com o Postmam ou Insomnia
Usando a Base URL geral 
http://localhost:3000

#Rotas do Usuário

Registrar usuário, tratado na rota ‘/users/register’ (verbo POST), que será precedido de uma verificação dos dados inseridos no cadastro

Login do usuário, tratado na rota ‘/users/login’ (verbo POST), que será precedido de autenticação no banco de dados

Listar usuários, tratado na rota ‘/users’ (verbo GET)

Listar usuário por id, tratado na rota ‘/users/:id’ (verbo GET)

Atualizar dados do usuário, tratado na rota ‘/users/:id’ (verbo PUT)

Remover usuário, tratado na rota ‘/users/:id’ (verbo DELETE)

#Rotas da da API 

Listar Urls da API externa, tratando na rota ‘/desenho/api’ (verbo GET)

Listar Caracteristica dos personagens, tratando na rota ‘/desenho/api/character’ (verbo GET)

Listar todos os episódios ‘/desenho/api/episode’ (verbo GET)

Listar todas as localizações das personagens ‘/desenho/api/location’ (verbo GET)


 






