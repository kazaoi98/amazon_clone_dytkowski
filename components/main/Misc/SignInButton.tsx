'use client';

import React, { useState } from 'react'
import LoginModal from '../Modals/LoginModal'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/hooks';
import { closeLoginModal, credentials, openLoginModal, removeUserCredentials } from '../../../redux/loginSlice';
import Image from 'next/image'
import { RootState } from '../../../redux/store';

export default function SignInButton() {
    const dispatch = useAppDispatch()




    const { loginModal, loginCredentials } = useSelector((state: any) => state.login);

    const toggleModal = () => {
        dispatch(openLoginModal())
    }
    const isObjEmpty = Object.keys(loginCredentials).length === 0 && loginCredentials.constructor === Object

    function SignIn() {
        return (
            <>
                <button onClick={() => toggleModal()} className='flex lg:hidden text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className=" w-10 h-10 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </button>


                <button onClick={() => toggleModal()} className='hidden lg:flex  md:ml-[2px] flex-wrap hover:outline hover:outline-[1px] hover:outline-white items-center ml-[2px] pl-[9px] w-[140px] leading-[1] py-[10px]'>

                    <span className='text-white text-[12px] '>Hello, sign in </span>
                    <span className='text-white font-semibold text-[14px] '>Account & Lists</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="pt-1 pl-1 w-4 h-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </>


        )
    }
    
    const signOut = () => {
        dispatch(removeUserCredentials())
        dispatch(closeLoginModal())
    }

    const DropdownMenu = () => {
        const objCopy = { ...loginCredentials }
        objCopy.login = loginCredentials.given_name || loginCredentials.login
        if (!loginCredentials.family_name || !loginCredentials.email) {
            objCopy.family_name = ''
            objCopy.email = ''
        }
        return (

            <div id="dropdownAvatar" className="absolute top-[55px] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ">
                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div className='flex justify-center'>{objCopy.login + ' ' + objCopy.family_name} </div>
                    <div className="font-medium truncate">{objCopy.email}</div>
                </div>
                {/* <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul> */}
                <div className="py-1 ">
                    <button className='w-full' onClick={() => signOut()}>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </button>
                </div>
            </div>

        )
    };

   

    const [dropdown, setDropdown] = useState(false)

    function LoggedIn() {

        return (
            <>

                <button className='mx-2 rounded-full bg-gray-400' onClick={() => {
                    setDropdown(!dropdown)
                }}>
                    <Image
                        className='rounded-full'
                        alt="user_img"
                        src={loginCredentials.picture}
                        width={40}
                        height={40}
                        priority={false}
                    />
                </button>
                {dropdown && <DropdownMenu />}

            </>
        )
    }

    return (
        <>


            {(isObjEmpty) ? (
                <>
                    <LoginModal open={loginModal} />
                    <SignIn />

                </>
            ) : (
                <LoggedIn />
            )
            }

        </>
    )
}

