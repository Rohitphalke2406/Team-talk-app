import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .catch((error) => alert(error.message));
  };

  return (
    <div className='h-screen grid place-items-center bg-slate-100'>
      <div className='bg-gray-100 rounded-3xl p-24 text-center shadow-md shadow-slate-700'>
        <img src="https://assets.mofoprod.net/network/images/slack.original.jpg" alt="" className='object-contain h-24 ml-12'/>
        <h1 className='text-xl font-semibold'>Sign in to Your Account</h1>
        <p className='mb-2'>Enjoy Your App!!</p>
        <button className='bg-green-700 text-white font-semibold px-4 py-2 rounded-xl transition hover:bg-green-600' onClick={signIn}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
