import React from 'react';

import CardIcon1 from "../assets/package.png";
import CardIcon2 from "../assets/rocket.png";
import CardIcon3 from "../assets/user.png";

const Started = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='grid grid-cols-3 space-x-4'>
            <div className='border text-center justify-center items-center py-20 px-10 rounded-2xl'>
                <img className='' src={CardIcon1} alt="" />
                <h3>Create Account</h3>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='border text-center  py-20 px-10 rounded-2xl'>
               <div className='justify-center items-center'>
                <img className='' src={CardIcon1} alt="" />

               </div>
                <h3>Create Account</h3>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='border text-center justify-center items-center py-20 px-10 rounded-2xl'>
                <img className='' src={CardIcon1} alt="" />
                <h3>Create Account</h3>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            </div>
        </div>
    );
};

export default Started;