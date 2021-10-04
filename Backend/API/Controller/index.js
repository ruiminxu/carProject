const User = require('../../Database/Models/User');
const Car = require('../../Database/Models/Car');
const bcrypt = require("bcrypt");

exports.homepage = async (req, res, next) => {
    if(req.session.isAuth)
    {
        res.status(200).send('You are in');
    }else{
        res.status(404).send('You are not logged in');
    }
}

exports.signUp = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const result = await User.findOne({where: {username: username}});

        if(!result) {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                username: username,
                password: hashPassword,
                firstname: 'John',
                lastname: 'Wick',
            })
            
            res.status(200).send(newUser);
        }else{
            res.status(403).send('User already exists');
        }
    }catch(error){
        console.log(error);
    }
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const result = await User.findOne({where: {username: username}});

        if(result) {
            await bcrypt.compare(password, result.password);

            req.session.isAuth = true;
            console.log(req.session.isAuth);
            res.status(200).send(result.dataValues);
        }else{
            res.status(403).send('You are in the system');
        }
    }catch(error){
        console.log(error);
    }
}

exports.logout = async(req, res, next) => {
    req.session.destroy();
    res.status(200).send('Done!');
}

exports.odn = async(req, res, next) => {
    const {brand, make, model, odometer, owner} = req.body;

    try {
        const newCar = await Car.create({
            brand: brand,
            make: make,
            model: model,
            odometer: odometer,
            owner: owner,
        })

        res.status(200).send(newCar);
        
    }catch(Error){
        console.log(error);
    }
}