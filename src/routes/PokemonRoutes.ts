import { Router } from 'express';
import { registerPokemon, getPokemons } from '../controllers/PokemonController';

const router = Router();

router.post('/register', registerPokemon);
router.get('/list', getPokemons);

export default router;
