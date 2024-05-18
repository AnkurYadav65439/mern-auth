import React from 'react'

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to my Auth App!</h1>
      <p className='mb-4 text-slate-700'>This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack with firebase storage and google authentication.</p>
      <p className='mb-4 text-slate-700'>You can start using this application after signup, just navigate to signup button and click on it.</p>
    </div>
  )
}
