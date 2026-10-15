import React from 'react';

const Home: React.FC = () => {
  return (
    <section className='flex  w-full h-screen' >
        <div className='h-screen w-2/5 bg-black flex flex-col gap-4 '>
            <h1 className='text-white font-bold text-5xl m-4'>Login</h1>
            <h3 className='text-white m-4' >enter your acont details</h3>
            <input placeholder='username bg-black'/>
            <input placeholder='pasword bg-black'/>


            
        </div>
      
    </section>
  );
};

export default Home;
