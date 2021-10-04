import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
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
            <label>Username: </label>
            <input></input>
            <label>Password: </label>
            <input></input>
            <label>Firstname: </label>
            <input></input>
            <label>Lastname: </label>
            <input></input>
            <label>Email: </label>
            <input></input>
            <button onClick = {signUp}>signUp</button>
        </div>
    )
}

export default SignUp;