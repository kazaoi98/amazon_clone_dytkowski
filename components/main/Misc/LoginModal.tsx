import Link from 'next/link'
import React from 'react'
import ReactDOM from 'react-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
    open: boolean;
}

type Inputs = {
    login: string,
    exampleRequired: string,
};


export default function LoginModal({ open }: Props) {
    if (!open) return null

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("login"))

    return ReactDOM.createPortal(
        <div className='flex bg-[rgba(0,0,0,.85)] w-full h-full top-0 bottom-0 left-0 right-0 fixed '>
            <div className='flex flex-col mb-auto mt-auto ml-auto mr-auto'>
                <div className='flex  flex-grow-0 w-full justify-center items-center  bg-gray-100 max-w-lg h-80 rounded-lg z-20'>
                    <div className='flex flex-col justify-center w-[60%] '>
                        <span className='font-semibold text-[1.7rem] text-black'>Sign in</span>
                        <span className=' mt-6 text-[0.8rem] font-semibold text-gray-500'>Email or mobile phone number</span>
                        <form
                            onSubmit={handleSubmit((data) => {
                                console.log(JSON.stringify(data));
                            })}
                            className='flex flex-col justify-center w-full'
                        >
                            <input {...register("login", { required: true })} aria-label='search input' type={'text'} autoComplete={'off'} className='mt-2 border border-solid border-gray-200 rounded-lg h-[40px] outline-none flex indent-[8px] leading-[15px] text-black' ></input>

                            {/* <Link href={''} className="hover:bg-yellow-400 w-full bg-yellow-300 rounded-lg mt-3 py-2">
                                <div className='flex justify-center items-center '>
                                    <span className='font-semibold text-[0.9rem] '>Continue</span>
                                    
                                </div>
                            </Link> */}
                            <input type="submit" value={'Continue'} className='cursor-pointer hover:bg-yellow-400 w-full bg-yellow-300 rounded-lg mt-3 py-2 font-semibold text-[0.9rem] ' />
                        </form>

                        <span className='mt-4 text-[0.9rem]  text-gray-500'>

                            By continuing, you agree to Amazon's
                            <Link href={''} > <span className='text-blue-500 no-underline hover:underline'> Conditions of Use </span></Link>
                            and
                            <Link href={''} > <span className='text-blue-500 no-underline hover:underline'> Privacy Notice.  </span></Link>

                        </span>

                    </div>

                </div>
                <div className='flex text-center mt-4'>
                    <div className='flex-grow relative '>
                        <div className='top-1/2 border-t border-solid border-gray-300 w-full absolute'></div>
                    </div>
                    <span className='flex-grow-0 pl-4 pr-4 text-gray-100 text-[0.8rem]'>New to Amazon?</span>
                    <div className='flex-grow relative'>
                        <div className='top-1/2 border-t border-solid border-gray-300 w-full absolute'></div>
                    </div>
                </div>
                <div className='hover:bg-gray-400 hover:text-white flex bg-gray-200 rounded-lg py-2 mt-4'>
                    <button className='w-full'>
                        <span className='font-semibold text-[1rem]'>Create new Amazon account</span>
                    </button>
                </div>
            </div>
        </div>
        ,
        document.getElementById('loginPortal')!
    )
}