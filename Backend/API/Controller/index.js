const User = require('../../Database/Models/User');
const bcrypt = require("bcrypt");

exports.homepage = async (req, res, next) => {
    res.send('hi');
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
            
            res.session.auth = true;
            res.send(200);
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
            res.session.auth = true;
            res.status(200).send('You are logged in');
        }else{
            res.status(403).send('You are in the system');
        }
    }catch(error){
        console.log(error);
    }
}

exports.logout = async(req, res, next) => {
    
}