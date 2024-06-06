import express from 'express';
import { addComment, getComments, longPollingComments } from '../controllers/commentControllers';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/add').post(protect, addComment);
router.route('/:pokemonId').get(getComments);
router.route('/longpoll/:pokemonId').get(longPollingComments);

export default router;
