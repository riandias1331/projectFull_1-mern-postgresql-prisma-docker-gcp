import pool from "../config/db.js";

export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] || null;
};

export const createUserService = async (name, email) => {
    const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
    );
    return result.rows[0];
};

export const updateUserService = async (id, name, email) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
    );
    return result.rows[0] || null;
};

export const deleteUserService = async (id) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0] || null;
};

// import pool from "../config/db.js";


// export const getAllUsersService = async (req, res) => {
//     try {
//         const result = await pool.query("SELECT * FROM users");
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error fetching users" });
//     }
// }


// export const getUserByIdService = async (req, res) => {
//     const { id } = req.params; 
//     try {

//         const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

//         // Verifica se o usuário foi encontrado
//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: "User not found" }); 
//         }

//         // Retorna os dados do usuário encontrado
//         res.status(200).json(result.rows[0]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error fetching user" });
//     }
// }


// export const createUserService = async (req, res) => {
//     const { name, email } = req.body; 
//     try {
//         // Insere o novo usuário no banco de dados e retorna os dados inseridos
//         const result = await pool.query(
//             "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
//             [name, email]
//         );

//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error creating user" });
//     }
// }


// export const updateUserService = async (req, res) => {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     try {
//         // Atualiza os dados do usuário com base no ID
//         const result = await pool.query(
//             "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
//             [name, email, id]
//         );

//         // Verifica se o usuário foi encontrado e atualizado
//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json(result.rows[0]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error updating user" });
//     }
// }


// export const deleteUserService = async (req, res) => {
//     const { id } = req.params;
//     try {
//         // Deleta o usuário com o ID fornecido e retorna os dados excluídos
//         const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

//         // Verifica se o usuário existia
//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error deleting user" });
//     }
// }