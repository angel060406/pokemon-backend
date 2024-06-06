import { Router } from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authControllers';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

export default router;
