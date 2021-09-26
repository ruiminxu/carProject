import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try{
            const x = await axios.post('http://localhost:5000/login', {
                username: 'Bob',
                password: 'Fancy',
            })

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h1>You are on the login page!!!</h1>
            <label>Username: </label>
            <input></input>
            <label>Password: </label>
            <input></input>
            <button onClick = {login}>Login</button>
        </div>
    )
}

export default Login;