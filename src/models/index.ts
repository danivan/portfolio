import mongoose from 'mongoose';

const connectDb = (uri: string) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
}

const models = {};

export { connectDb };

export default models;
