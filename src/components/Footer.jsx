import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer class="text-gray-600 mt-5  body-font">
            <div class=" px-5 w-[50%] items-center mx-auto flex justify-between  ">
                <div className="flex p-4  items-center gap-2 rounded-xl ">
                    <FaHandHoldingHeart size={38} className="text-green-600" />
                    <div className="flex flex-col items-center  gap-0">
                        <h1 className="text-gray-700 text-xl font-sans font-bold">
                            MAKE IT MUMKIN
                        </h1>
                        <span className="text-gray-700 text-[10px] flex -mt-1 justify-center   w-full">

                            Together, Anything is Mumkin
                        </span>
                    </div>
                </div>
                <div class="flex ml-auto mr-8 ">
                    <div className='flex gap-3 '>
                        
                        <div class=" w-full px-4">
                            <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Abouts us</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Volunteer</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Galary</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Contect us</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm font-semibold text-center sm:text-left">© 2024 MakeItMumkin —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 text-xs lowercase ml-1" target="_blank">MakeItMumkin.com</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
