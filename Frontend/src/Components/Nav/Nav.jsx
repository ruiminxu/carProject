import { useHistory } from "react-router-dom";

const Nav = () => {
    
    const history = useHistory();

    const toLogin = () => {
        history.push('/login');
    }

    const toHome = () => {
        history.push('/');
    }
    
    return (
        <div>
            <div>
                <button onClick = {toHome}>
                    Home
                </button>
            </div>
            <div>
                <button onClick = {toLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Nav;