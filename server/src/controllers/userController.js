import {
    createUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService 
} from '../models/userModel.js';

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,     
        message,    
        data        
    });
}

export const createUser = async (req, res) => {
    const { name, email } = req.body; 


    if (!name || !email) {
        return handleResponse(res, 400, 'Name and email are required');
    }

    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, 'User created successfully', newUser);
    } catch (error) {
        console.error('Error in createUser:', error);
        handleResponse(res, 500, 'Error creating user');
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, 'Users fetched successfully', users);
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        handleResponse(res, 500, 'Error fetching users');
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params; 
    try {
        const user = await getUserByIdService(id);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User fetched successfully', user);
    } catch (error) {
        console.error('Error in getUserById:', error);
        handleResponse(res, 500, 'Error fetching user');
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params; 
    const { name, email } = req.body; 
    try {
        const updatedUser = await updateUserService(id, name, email);
        if (!updatedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User updated successfully', updatedUser);
    } catch (error) {
        console.error('Error in updateUser:', error);
        handleResponse(res, 500, 'Error updating user');
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params; 
    try {
        const deletedUser = await deleteUserService(id);
        if (!deletedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User deleted successfully', deletedUser);
    } catch (error) {
        console.error('Error in deleteUser:', error);
        handleResponse(res, 500, 'Error deleting user');
    }
}


// // Model
// import {
//     createUserService,
//     getAllUsersService,
//     getUserByIdService,
//     updateUserService,
//     deleteUserService 
// } from '../models/userModel.js';

// // Função utilitária para enviar respostas padronizadas
// const handleResponse = (res, status, message, data = null) => {
//     res.status(status).json({
//         status,     
//         message,    
//         data        
//     });
// }

// // Controller para criar um novo usuário
// export const createUser = async(req, res) => {
//     const { name, email } = req.body; 
//     try {
//         const newUser = await createUserService(name, email);
//         handleResponse(res, 200, 'Users fetched successfully', newUser);
//     } catch (error) {
//         console.error(error);
//         handleResponse(res, 500, 'Error creating user');
//     }
// }

// // Controller para buscar todos os usuários
// export const getAllUsers = async(req, res) => {
//     try {
//         const Users = await getAllUsersService();
//         handleResponse(res, 200, 'Users fetched successfully', Users);
//     }
//     catch (error) {
//         console.error(error);
//         handleResponse(res, 500, 'Error fetching users');
//     }
// }

// // Controller para buscar usuário pelo ID
// export const getUserById = async(req, res) => {
//     const { id } = req.params; 
//     try {
//         const user = await getUserByIdService(id);
//         if (!user) {
//             return handleResponse(res, 404, 'User not found');
//         }
//         handleResponse(res, 200, 'User fetched successfully', user);
//     } catch (error) {
//         console.error(error);
//         handleResponse(res, 500, 'Error fetching user');
//     }
// }

// // Controller para atualizar dados de um usuário
// export const updateUser = async(req, res) => {
//     const { id } = req.params; 
//     const { name, email } = req.body; 
//     try {
//         const updatedUser = await updateUserService(id, name, email);
//         if (!updatedUser) {
//             return handleResponse(res, 404, 'User not found');
//         }
//         handleResponse(res, 200, 'User updated successfully', updatedUser);
//     } catch (error) {
//         console.error(error);
//         handleResponse(res, 500, 'Error updating user');
//     }
// }

// // Controller para excluir um usuário
// export const deleteUser = async(req, res) => {
//     const { id } = req.params; 
//     try {
//         const deletedUser = await deleteUserService(id);
//         if (!deletedUser) {
//             return handleResponse(res, 404, 'User not found');
//         }
//         handleResponse(res, 200, 'User deleted successfully', deletedUser);
//     } catch (error) {
//         console.error(error);
//         handleResponse(res, 500, 'Error deleting user');
//     }
// }