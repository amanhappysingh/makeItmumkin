import React from 'react'
import DonateButton from './DonateButton';

const BlogsCard = () => {
    return (
        <div className="p-4 w-full h-full">
            <div className="h-full  flex border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                <img
                    className="h-[50vh] rounded-lg w-[50%] object-cover object-center"
                    src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="blog"
                />
                <div className="p-6 flex flex-col justify-between ml-4">
                    <div className=''>
                        <div className="flex items-center my-6 ">
                            <h1> May 25 , 2023 - 10:23</h1>
                        </div>
                        <h1 className="title-font  hover:text-orange-500 text-5xl font-medium text-gray-900 mb-3">The Catalyzer</h1>
                        <p className="leading-relaxed hover:text-orange-500 my-6">
                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <hr className='' />
                        <div>
                        <DonateButton />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};




export default BlogsCard
