import mongoose from 'mongoose';


const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log('DB connection failed'));
};

export default connectDB;