import express from 'express';
const router = express.Router();

import { getAllUsers, createUser, getUserById, updateUser, deleteUser} from '../controllers/userController.js';

import validator from '../utils/validators.js';

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', validator, createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
// router.delete('/users/', deleteUserAll);

export default router;