import userModel from '../models/clientes.model.js';

const validateUserCreate =async (req, res, next) => {
    const { codCliente, senha } = req.body;
    const cliente = await userModel.getById(codCliente);
    if (cliente) {
        return res.status(400).json({
            message: "Cliente já cadastrado"
        });
    }
    next()
}

export default validateUserCreate;