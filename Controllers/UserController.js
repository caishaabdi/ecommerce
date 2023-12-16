import UserModel from "../Models/UserModel.js";
import generateToken from "../Utilies/GenarateToken.js"

export const register = async(req, res) => {

    try {
        const { name, email, password, address, phone } = req.body
        const userExisit = await UserModel.findOne({ email })

        if (userExisit) {
            res.status(400).json({
                message: 'user alredy exists'
            })
        } else {
            createuser = UserModel.create({
                name,
                email,
                password,
                address,
                phone,
            })

            if (createuser) {
                res.status(201).json({
                    _id: createuser._id,
                    name: createuser.name,
                    email: createuser.email,
                    password: createuser.password,
                    address: createuser.address,
                    phone: createuser.phone,
                    token: generateToken(createuser._id)
                })

            } else {
                res.status(401).json({ message: 'Invalid User Data' });
            }


        }
    } catch (e) {
        print(e.toString());
    }

};


export const login = async(req, res) => {

    // try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email })
    if (user && password == user.password) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

    } else {
        res.status(404).json({ message: 'Invalid gmail or password' });

    }

}

export const getUserProfile = async(req, res) => {
    const { id, token } = req.body;
    const user = await UserModel.findOne({ id })
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token
        })

    } else {
        res.status(404).json({ message: 'Invalid user data' });

    }
}