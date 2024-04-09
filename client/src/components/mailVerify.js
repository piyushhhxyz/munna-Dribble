import React, { useEffect } from 'react'
import Footer from './footer'
import Header from './header'
import { useAuth } from "../contexts/AuthContext";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function MailVerify() {
    const navigate = useNavigate()
    const { isLoggedIn, user, ResendEmailConfirmation, postVerifyEmail } = useAuth();
    const [searchParams, setSearchParams] = useSearchParams()

    const emailToken = searchParams.get('emailToken')

    useEffect(()=>{
        console.log(user.isVerified)
            if(user?.isVerified){
                return navigate('/');
            }else{
                if(emailToken){
                    postVerifyEmail(emailToken)
                }
            }
    },[])

    return (
        <>
            <Header />
            <div className='flex justify-center '>
                <div style={{ margin: "80px 0px" }} className='text-center w-1/2'>
                    <h1 className='font-bold text-3xl'>Please verify your email...</h1>
                    <i className="fa-solid fa-envelope-circle-check fa-5x text-g9c9da5 my-7"></i>
                    <h3 className='text-sm text-616066'>Please verify your email address. We've sent a confirmation email to:</h3>
                    <h3 className='text-sm font-bold my-5'>{user?.email}</h3>
                    <h3 className='text-sm text-616066'>Click the confirmatiom link in that email to begin using dribbble.</h3>
                    <h3 className='text-sm text-616066 my-5'>Don't receive the email? Check your spam folder, it may have been caught by filter. If you still don't see it, you can <button className='text-ea478b font-bold' onClick={ResendEmailConfirmation}>resend the confirmation email</button></h3>
                    {/* <h3 className='text-sm text-616066'>Wrong email address? <span className='text-ea478b font-bold'>Change it.</span></h3> */}
                </div>
            </div>
            <Footer />
        </>
    )
}
