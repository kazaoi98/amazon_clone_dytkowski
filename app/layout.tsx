import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css'
import Providers from './providers';


import 'react-toastify/dist/ReactToastify.css';
import Login from '../components/main/Misc/LoginModal';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <html lang="pl">
            <head>
                <title>Next.js Amazon clone</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Amazon clone made by Łukasz Dytkowski" />
            </head>
            <body className='box-border h-full w-full bg-[#EAEDED] overflow-x-hidden'>
                <div>
                    <Providers>
                        <Header />
                        {children}
                     
                    </Providers>
                    <Footer />
                </div>
                <div id="loginPortal"></div>
            </body>
        </html>

    )
}