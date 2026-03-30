import React from 'react';

const Count = () => {
    return (
        <div className=' flex justify-center items-center py-10 mt-10 bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#9514FA] '>
            <div className='flex mx-auto items-center text-center gap-30'>
            <div>
                <h2 className='font-extrabold text-4xl text-white'>50K+</h2>
                <p className='text-gray-200'>Active Users</p>
            </div>
<hr/>
            <div>
                <h2 className='font-extrabold text-4xl text-white'>200+</h2>
                <p className='text-gray-200'>Premium Tools</p>
            </div> <hr />

            <div>
                <h2 className='font-extrabold text-4xl text-white'>4.9</h2>
                <p className='text-gray-200'>Rating</p>
            </div>
            </div>
        </div>
        
    );
    
};


export default Count;