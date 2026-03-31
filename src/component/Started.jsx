import React from 'react';

import CardIcon1 from "../assets/package.png";
import CardIcon2 from "../assets/rocket.png";
import CardIcon3 from "../assets/user.png";


const Started = () => {
    return (
        <div className='max-w-11/12 mx-auto '>
            <div className='text-center mt-16'>
                <h2 className='text-5xl font-bold text-black'>Get Started in 3 Steps</h2>
                <p className='text-sm m-4 text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 w-11/12 gap-4 mx-auto'>
                <div className='border w-[350px] h-[300px]  border-gray-500 text-center p-5 rounded-2xl'>
                    <p className='text-right '> <span className='bg-linear-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA] text-white text-bold border border-gray-600 px-3 py-2 rounded-full'> 01 </span></p>
                    <div className='flex justify-center'>
                        <img className='border p-3 rounded-full bg-[#f2e9fe]' src={CardIcon3} alt="" />
                    </div>
                    <h3 className='text-black font-bold m-2'>Create Account</h3>
                    <p className='text-sm text-gray-500'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>

                <div className='border text-center w-[350px] h-[300px]   p-5  rounded-2xl'>
                    <p className='text-right '> <span className='bg-linear-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA] text-white text-bold border border-gray-600 px-3 py-2 rounded-full'> 02 </span></p>
                    <div className='flex justify-center '>
                        <img className='border p-3 rounded-full bg-[#f2e9fe]' src={CardIcon1} alt="" />
                    </div>
                    <h3 className='text-black font-bold m-2'>Choose Products</h3>
                    <p className='text-sm text-gray-500'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>

                <div className='border text-center w-[350px] h-[300px] justify-center items-center p-5  rounded-2xl'>
                    <p className='text-right '> <span className='bg-linear-to-r from-[#4F39F6] via-[#4F39F6] to-[#9514FA] text-white text-bold border border-gray-600 px-3 py-2 rounded-full'> 03 </span></p>
                    <div className='flex justify-center'>
                        <img className='border p-3 rounded-full bg-[#f2e9fe]' src={CardIcon2} alt="" />
                    </div>
                    <h3 className='text-black font-bold m-2'>Start Creating</h3>
                    <p className='text-sm text-gray-500'>Download and start using your premium <br /> tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default Started;

