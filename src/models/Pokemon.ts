import { Schema, model } from 'mongoose';

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Pokemon = model('Pokemon', pokemonSchema);
export default Pokemon;