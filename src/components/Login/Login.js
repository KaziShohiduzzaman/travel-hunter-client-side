import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInWithGoogle,setError } = useAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_URI)
            }).catch((error) => {
                setError(error.message)
            });
    }


    return (
        <div className='login-container parent'>
            <h1 className='login-header'>Please Log in with Google:</h1>
            <button className='child' onClick={handleGoogleLogIn}>
                <span className='p-2 btn-rounded text-white fw-bold'>
                    <i class="fab fa-google me-3 text-warning"></i>
                    Google Sign in
                </span>
            </button>
        </div>
    );
};
export default Login;