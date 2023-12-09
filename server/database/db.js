import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@whatsdown.sbpej9d.mongodb.net/?retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully!');
    } catch(error) {
        console.log('Error while connecting with DataBase: ', error.message);
    }

};

export default Connection;