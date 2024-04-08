import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
    const { isLoggedIn, user, logout } = useAuth();

    const [showprofile, setshowprofile] = useState(false)
    const ShowProfile = () => {
        if (showprofile) {
            setshowprofile(false)
        } else {
            setshowprofile(true)
        }
    }
    const [hmburger, sethmburger] = useState(false)
    const ShowMenu = () => {
        if (hmburger) {
            sethmburger(false)
        } else {
            sethmburger(true)
        }
    }
    return (
        <div>
            <nav style={{ height: "80px" }} className='px-6 flex justify-between items-center'>
                <div className='gap-6 flex text-sm text-616066 font-bold items-center'>
                    <div className='hmburger' onClick={ShowMenu}>
                        <div className={hmburger ? 'hm hm-rt' : 'hm'}></div>
                        <div className={hmburger ? 'hm my-1 hm-2t' : 'hm my-1'}></div>
                        <div className={hmburger ? 'hm-3  hm-3t' : 'hm-3'}></div>
                    </div>
                    <Link to='/'> <img style={{ width: "90px" }} alt='logo' src={require('../images/logo-dark.png')} /></Link>
                    <div className={hmburger ? 'flex gap-6 menu-hm menu-hmt' : 'flex gap-6 menu-hm'}>
                        <Link className='hover:text-black'>Inspiration</Link>
                        <Link className='hover:text-black'>Find Work</Link>
                        <Link className='hover:text-black'>Learn Design</Link>
                        <Link className='hover:text-black'>Go Pro</Link>
                        <Link className='hover:text-black'>Hire Designers</Link>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='search hd-upload'>
                        <input className=' bg-e0e0e0 rounded-md text-sm pl-7 pr-5 py-2 outline-none' type='text' placeholder='Search' />
                    </div>
                    <span className="mx-2 text-616066 material-symbols-outlined hd-upload">
                        local_mall
                    </span>
                    {isLoggedIn ? (<div className='flex'>
                        <div onClick={ShowProfile} style={{ background: `url(${user?.profilepic}) center/cover` }} className='mx-2 bg-e0e0e0 user'>
                            {user?.profilepic ? null : <i className="fa-solid text-616066 fa-user"></i>}
                        </div>
                        <div className={showprofile ? 'block' : 'hidden'}>
                            <div className='profile'>
                                <div style={{ background: `url(${user?.profilepic}) center/cover` }} className='mx-2 bg-e0e0e0 user'>
                                    {user?.profilepic ? null : <i className="fa-solid text-616066 fa-user"></i>}
                                </div>
                                <h3>{user?.name}</h3>
                                <div className='mt-5 text-sm'>
                                    <h6>Upload design work</h6>
                                    <h6 className='my-2'>Work Preference</h6>
                                    <hr />
                                    <button onClick={logout} className='mt-2 text-red-500'>Sign out</button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="text-sm outline-none bg-ea478b px-5 py-2 text-white rounded-md hd-upload">Upload</button></div>) : <div className='flex justify-center items-center'>
                        <Link to='/login' className='font-bold text-md mr-2'>Login</Link>
                        <Link to='/signup' className='sg-btn'>Signup</Link>
                    </div>}

                </div>
            </nav>
            <hr className='bg-616066' />
        </div>
    )
}
