import { Document, ObjectId } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: ObjectId;
        name: string;
        email: string;
      } & Document;
    }
  }
}
