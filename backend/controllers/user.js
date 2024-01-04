const UsersModel = require('../models/user');
const UsersTypeModel = require('../models/user_type');
const bcrypt = require("bcrypt");


const createTypeUser = async (req, res) => {

    const { type } = req.body;

    if (!type) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
    }

    // Encontrar tipos com o mesmo nome
    const existingTypes = await UsersTypeModel.findAll({ where: { type } });

    if (existingTypes.length > 0) {
        return res.status(400).json({ message: 'Este tipo de usuário já existe' });
    }

    try {
        // Criar um novo tipo de usuário
        const userType = await UsersTypeModel.create({ type });

        return res.status(201).json({ message: 'Tipo de usuário criado com sucesso', userType });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar tipo de usuário' });
    }
};

const getUsersType = async (req,res) => {
    try{
        const userType = await UsersTypeModel.findAll();
        return res.status(201).json(userType)
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Erro ao pesquisar pelos tipos de usuários"})
    }
};

const createUser = async(req,res) => {
    const {name, email, password} = req.body
    const user_type_id = 2;
    let photo = req.file ? req.file.filename : "default.png";
    

    if(!name || !email || !password){
        return res.status(400).json({ message: "Preencha todos os campos"});
    }

    if(!email.includes("@") && !email.includes(".")){
       return res.status(400).json({ message: "Email inválido"});
    }

    const userExists = await UsersModel.findOne({ where:  { email } });

    if(userExists){
        res.status(400).json({ message : "O user já existe" });
    }


    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await UsersModel.create({
            name,
            email,
            password: hashedPassword,
            user_type_id,
            photo
        });
        
        return res.status(201).json(user);
    }catch(error){
        console.log(error);
        return res.status(500).json({message : "Erro ao criar usuário"});
    }
    
}

const getUsers = async(req,res) => {
    try{
        const users = await UsersModel.findAll()
        return res.status(201).json(users);
    }catch(error){
        console.log(error);
        return res.status(501).json({ message: "Erro na pesquisa dos users"});
    }
}


module.exports = createTypeUser;
module.exports = getUsersType;
module.exports = createUser;
module.exports = getUsers;

