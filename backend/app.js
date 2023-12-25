const express = require('express');
const db = require("./config/db");
const UsersModel = require("./models/user");
const UserTypeModel = require("./models/user_type");

const app = express();
const port = 5500;

//sicronizar as tabelas da base de dados

db.sync()
    .then(() => {
        console.log("Tabelas sicronizadas");
    })
    .catch((err) => {
        console.log('Erro ao sicronizar as tabelas: ', err);
    })


//----------------------------------------------------------------//

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server a funcionar na porta ${port}`)
});
