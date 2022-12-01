import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css'
import Providers from './providers';




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
            </head>
            <body className='box-border h-full w-full bg-[#EAEDED] overflow-x-hidden'>
                <div>
                    <Providers>
                        <Header />
                        {children}
                    </Providers>
                    <Footer />
                </div>
            </body>
        </html>

    )
}