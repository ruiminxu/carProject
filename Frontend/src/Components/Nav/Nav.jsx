import { useHistory } from "react-router-dom";

import "./style.css";

const Nav = () => {
    
    const history = useHistory();

    const toLogin = () => {
        history.push('/login');
    }

    const toHome = () => {
        history.push('/');
    }

    const toSignUp = () => {
        history.push('/signUp')
    }
    
    return (
        <div className = 'NavBar'>
            <div className = 'Section_One'>
                <div className = 'Logo' onClick = {toHome}>
                    Mainten
                </div>
            </div>
            <div className = 'Section_Two'>
                <div className = 'Login_Button' onClick = {toLogin}>
                    Login
                </div>
                <div className = 'SignUp_Button' onClick = {toSignUp}>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Nav;