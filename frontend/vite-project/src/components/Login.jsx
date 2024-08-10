import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, name);

        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, name }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/');
    };

    return (
        <div className='container'>
            <h1>Login</h1>
            <form className='login-form' onSubmit={handleLogin}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    className='inputbox'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter email'
                />

                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    className='inputbox'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name'
                />

                <button type='submit' className='login-button'>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
