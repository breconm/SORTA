import React from 'react';

function Login({ setCurrentTab }) {
  return (
    <div className="login-page">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <span
          onClick={() => setCurrentTab('Signup')}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Sign up here
        </span>
      </p>
    </div>
  );
}

export default Login;