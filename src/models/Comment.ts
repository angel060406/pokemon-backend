import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  pokemonId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Pokemon'
  },
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;