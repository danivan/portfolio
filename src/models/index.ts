import mongoose from 'mongoose';

const connectDb = (uri: string) => {
  return mongoose.connect(uri);
};

const models = {};

export { connectDb };

export default models;
