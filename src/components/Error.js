import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Error() {

    return (
        <div>
            <Header />
            <div className='flex justify-center items-center' style={{ height: '50vh' }}>
                <h1 className='font-bold text-3xl '>404! NOT FOUND</h1>
            </div>
            <Footer />
        </div>
    )
}
