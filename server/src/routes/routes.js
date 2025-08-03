import express from 'express';
const router = express.Router();
import userModel from '../controllers/userController.js';

router.post('/users', userModel.createUser);
router.get('/users', userModel.getUsers);
router.get('/users/:id', userModel.getUserId);
router.put('/users/:id', userModel.updateUser);
router.delete('/users/:id', userModel.deleteUser);
router.delete('/users', userModel.deleteUserAll);

export default router;