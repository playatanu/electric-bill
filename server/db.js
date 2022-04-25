import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose.connect(
    'mongodb+srv://play:1234@cluster0.5p7pj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
};

export default dbConnect;
