import React from 'react'
import DarkLightMode from './theme-changer/DarkLightMode'
import ThemeChanger from './theme-changer/ThemeChanger'

const AppHeader = () => {
    return (
        <>

            <section className="bg-white sticky top-0 z-50" >
                <nav className="flex justify-between p-2 px-4">
                    <div className="flex justify-between items-center w-full">
                        <div className="xl:w-1/3 flex">
                            <a className="block max-w-max" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-aperture"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="green" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="primaryColor"></path>
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <path d="M3.6 15h10.55"></path>
                                    <path d="M6.551 4.938l3.26 10.034"></path>
                                    <path d="M17.032 4.636l-8.535 6.201"></path>
                                    <path d="M20.559 14.51l-8.535 -6.201"></path>
                                    <path d="M12.257 20.916l3.261 -10.034"></path>
                                </svg>
                            </a>
                            <h1 className='font-bold text-2xl leading-loose '>Travelers</h1>
                        </div>
                        <div className="hidden md:block xl:w-1/3">
                            <ul className="flex justify-center menu menu-horizontal menu-compact">
                                <li ><a className=" font-medium" href="#">Home</a></li>
                                <li ><a className=" font-medium" href="#">Rooms</a></li>
                                <li ><a className=" font-medium" href="#">Contact Us</a></li>
                                <li ><a className=" font-medium" href="#">Blogs</a></li>
                                <li>
                                    <a className=" font-medium">
                                        Elements
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-base-200">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:block xl:w-1/3">
                            <div className="flex items-center justify-end gap-3">
                                <DarkLightMode />
                                <ThemeChanger />
                                <button className="btn btn-outline btn-sm ">Login</button>
                                <button className="btn btn-primary btn-sm ">Log Out</button>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-burger self-center md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="14" y2="12"></line>
                            <line x1="4" y1="18" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </nav>

                <div className="navbar-menu hidden  fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
                    <div className="fixed top-0 left-0 bottom-0 w-full  max-w-xs bg-gray-200">
                        <nav className="relative p-6 h-full overflow-y-auto">
                            <div className="flex flex-col h-full">
                                <a className="inline-block" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M3.6 15h10.55"></path>
                                        <path d="M6.551 4.938l3.26 10.034"></path>
                                        <path d="M17.032 4.636l-8.535 6.201"></path>
                                        <path d="M20.559 14.51l-8.535 -6.201"></path>
                                        <path d="M12.257 20.916l3.261 -10.034"></path>
                                    </svg>
                                    {/* <h1 className='font-bold text-2xl leading-loose '>Travelers</h1> */}
                                </a>
                                <ul className="py-0">
                                    <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Home</a></li>
                                    <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Rooms</a></li>
                                    <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Contact Us</a></li>
                                    <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Blog</a></li>

                                </ul>

                                <div className="flex flex-wrap">
                                    <div className="w-full mb-2">
                                        <button className="btn btn-outline btn-sm inline-block py-2 px-4 w-full text-sm leading-5 ">Login</button>

                                    </div>
                                    <div className="w-full">
                                        <button className="btn btn-primary btn-sm inline-block py-2 px-4 w-full text-sm leading-5 ">Sing Up</button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            </section>


        </>
    )
}

export default AppHeader