import React from 'react';

const Guest = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome, Guest!</h1>
            <p>You can explore the app and view its features, but access is limited.</p>
            <p>Please sign up or log in to unlock full functionality.</p>
            <button 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => alert('Redirecting to sign-up/login page...')}
            >
                Sign Up / Log In
            </button>
        </div>
    );
};

export default Guest;