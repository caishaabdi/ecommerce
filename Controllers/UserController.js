import UserModel from "../Models/UserModel.js"
import generateToken from "../Utilies/GenarateToken.js"

export const register = async(req, res) => {
    const { name, email, password, address, phone } = req.body

    const userExisit = await UserModel.findOne({ email })

    if (userExisit) {
        res.status(400).json({
            massage: 'user alredy exists'
        })
    } else {
        createuser = UserModel.create({
            name,
            gamil,
            password,
            address,
            phone,
        })

        if (createuser) {
            res.status(201).json
            _id: createuser._id;
            name: createuser.name
            gamil: createuser.gamil
            password: createuser.password
            address: createuser.address
            phone: createuser.phone
                // token: generateToken(createuser._id)
        } else {
            res.status(401).json({ message: 'Invalid User Data' });
        }


    }

}



export const login = async(req, res) => {
    const { email, password } = req.body;
    const userLOgin = UserModel.findOne({ email })

    if (userLOgin && password == userLOgin.password) {
        res.status(200).json
        _id: createuser._id;
        name: createuser.name
        gamil: createuser.gamil
        password: createuser.password
        address: createuser.address
        phone: createuser.phone
            // token: generateToken(userLOgin._id)

    } else {
        res.status(404).json({ message: 'Invalid gmail or password' });

    }
}