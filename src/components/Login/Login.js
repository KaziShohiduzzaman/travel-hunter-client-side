import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInWithGoogle } = useAuth()

    return (
        <div className='login-container parent'>
            <h1 className='login-header'>Please Log in with Google:</h1>
            <button className='child' onClick={signInWithGoogle}>
                <span className='p-2 btn-rounded text-white fw-bold'>
                    <i class="fab fa-google me-3 text-warning"></i>
                    Google Sign in
                </span>
            </button>
        </div>
    );
};
export default Login;