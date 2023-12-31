import Usuario from '../models/usuario';


export const obtenerUsuarios = async (req, res) => {
    try {
        //pedir a la BD la lista de productos
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
};
export const obtenerUsuario = async (req, res) => {
    try {
        //pedir a la BD la lista de productos
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
};
export const crearUsuario = async (req, res) => {
    try {
        console.log(req)
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: 'El usuario se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        console.log(req)
        res.status(404).json({
            mensaje: 'Error al crear el usuario',
        });
    }
};
export const borrarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El usuario se borró correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al borrar el usuario',
        });
    }
};
export const editarUsuario = async (req, res) => {
    try {
        await Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true });
        res.status(200).json({
            mensaje: 'El usuario se editó correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al editar el usuario',
        });
    }
};