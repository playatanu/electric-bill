import { Schema, models, model } from 'mongoose';
const userSchemma = new Schema(
  {
    name: { type: String, require: true },
    password: { type: String, require: true },
    address: { type: String, default: '' },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.User || model('User', userSchemma);
