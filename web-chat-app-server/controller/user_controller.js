import user from '../model/User.js';

export const addUser = async (request, response) => {
    console.log(request.body);

    try {
        let exist = await user.findOne({ googleId: request.body.googleId });

        if (exist) {
            response.status(200).json("User Already Exists!");
            return;
        }

        const newUser = new user(request.body);
        await newUser.save();
        response.status(200).json("User Added Successfully!");
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getUsers = async (request, response) => {
    try {
        // Find function is used to get all the users from the database
        const users = await user.find({});
        console.log(users);
        response.status(200).json(users);
    } catch(error) {
        console.log(error);
        response.status(500).json(error);
    }
}
