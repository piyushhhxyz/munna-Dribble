import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Home() {

    return (
        <div>
            <Header />
            <div className='flex justify-center items-center' style={{ height: '50vh' }}>
                <h1 className='font-bold text-3xl '>Welcome Home!</h1>
            </div>
            <Footer />
        </div>
    )
}
