import React from 'react'

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack with firebase storage and google authentication. It includes authentication features that allow users to sign up, log in, log out, and provides access to protected routes only for authenticated users. For securing password at backend, bcryptjs library is used which involved hashing using salt. For routes protection, jsonwebtoken used that stores on user's local storage</p>
      <p className='mb-4 text-slate-700'>Features include, after successfull sign up, user can update their profile like username, password, profile picture which is going to store pictures on secured firebase storage.</p>
    </div>
  )
}
