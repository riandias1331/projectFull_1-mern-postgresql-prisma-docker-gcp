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

export const deleteUserAllService = async () => {
    if (process.env.NODE_ENV === 'production') {
        // Se estiver em produção, retorne um erro para o controller lidar
        throw new Error("Operation not allowed in production");
    }

    const result = await pool.query("DELETE FROM users RETURNING *");
    return {
        count: result.rowCount,
        users: result.rows,
    };
};
