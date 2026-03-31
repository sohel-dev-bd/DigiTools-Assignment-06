import React from 'react';

const Ready = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#9514FA] '>
            <div className='mt-10 p-20 text-center justify-center items-center'>
                <h2 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h2>
             
                <p className='text-sm text-gray-200 m-4'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                      <div className="flex flex-wrap gap-4 pt-4 justify-center items-center">
                        <button className=" bg-white hover:bg-red-500 transition-all px-4 py-2 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-black">
                          Explore Products
                        </button>
                        <button className="bg-red-600 hover:bg-[#4F39F6] transition-all px-4 py-2 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
                         Watch Demo
                        </button>
                      </div>

            </div>
        </div>
    );
};

export default Ready;