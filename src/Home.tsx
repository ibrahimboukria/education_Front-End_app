
import React from 'react';
import './home.css';
const Home: React.FC = () => {
  return (
    <section className="flex w-full h-screen flex-wrap">
      
      <div className="h-screen w-2/5 bg-black flex flex-col justify-center px-8">
        
       
        <div className="flex flex-col w-full max-w-sm">
          <h1 className="text-white font-bold text-5xl mb-4">Login</h1>
          <h3 className="text-white mb-6">Enter your account details</h3>
          
          <input
            type="text"
            placeholder="Username"
            className="mb-4 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <h2 className="text-white">Don’t have an account?</h2>
          <button className="bg-white text-black font-semibold px-4 py-1 rounded-md hover:bg-gray-200 transition">
            Sign up
          </button>
        </div>
      </div>
      <div className='bg-[#4F46E5] h-screen w-3/5 flex flex-col items-center'>
      <h1 className='font-bold text-7xl m-10 text-white [-webkit-text-stroke:2px_#FFFFFF] '> WEBETU</h1>
      <h1 className='font-bold text-2xl m-10 text-white' id='kk5'>Welcome to your lerning Hub</h1>
      <div className='overflow-hidden h-screen w-3/5'>
         <img src='cc.png' className='w-full  h-full object-cover scale-125 -translate-x-20'/>
      </div>
     




      </div>
    
    </section>
  );
};

export default Home;
