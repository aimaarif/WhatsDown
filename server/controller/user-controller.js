import User from "../models/User.js"; 


export const addUser = async (request, response) => {
    try {
        //  already  exists
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        // First time user
        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);

    } catch (error) {
        response.status(500).json("Error while adding user: ", error);
    }
}

export const getUser = async (request, response) => {
    try {
        const user = await User.find({});
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json("Error while fetching user's data: ", error);
    }
}