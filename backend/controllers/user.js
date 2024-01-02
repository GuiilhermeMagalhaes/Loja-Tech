const UsersModel = require('../models/user');
const UsersTypeModel = require('../models/user_type');

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

module.exports = createTypeUser;


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
    

    if(!name || !email || !password){
        return res.send(400).json({ message: "Preencha todos os campos"});
    }

    
}

module.exports = getUsersType;