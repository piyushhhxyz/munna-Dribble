import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";
import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
    roles: []
}
export default function Roletype() {
    const { isLoggedIn, roleType } = useAuth();

    const roletypeSchema = Yup.object({
        roles: Yup.array().min(1, 'At least one role must be selected')
    })

    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: roletypeSchema,
        onSubmit: (values) => {
            roleType(values)
        }
    })

    return (
        <div>
            <div className='flex items-center'>
                <Link to='/'><img style={{ height: "6rem" }} className=" mt-4 ml-14 img-l" src={require('../images/logo-pink.png')} alt="img-clip" /></Link>
                <Link to='/create-profile' className='bg-e0e0e0 mt-4 ml-3 px-3 py-1 rounded-lg'><i className="fa-solid fa-angle-left"></i></Link>
            </div>
            <div className='flex justify-center w-full text-center'>
                <div className='rold'>
                    <h2 className="font-bold text-3xl text-l">What brings you to dribbble?</h2>
                    <div className='text-sm text-616066 mt-4'>Select the option that best describe you.Don't you can explore other options later.</div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-7 flex justify-center text-center gap-11 role-rl'>
                            <div className='card'>
                                <label className='card-role' htmlFor='card1'>
                                    <img src={require('../images/img-1t.png')} alt='img-clip' />
                                    <h5 className='font-bold mb-2'>I'm a designer looking to share my work</h5>
                                    <input checked={values.roles.includes("I'm a designer looking to share my work")} value="I'm a designer looking to share my work" onChange={handleChange} name='roles' className='role-check' id='card1' type='checkbox' />
                                </label>
                            </div>
                            <div className='card'>
                                <label className='card-role' htmlFor='card2'>
                                    <img src={require('../images/img-2t.png')} alt='img-clip' />
                                    <h5 className='font-bold mb-2'>I'm looking to hire a designer</h5>
                                    <input checked={values.roles.includes("I'm looking to hire a designer")} value="I'm looking to hire a designer" onChange={handleChange} name='roles' className='role-check' id='card2' type='checkbox' />
                                </label>
                            </div>
                            <div className='card'>
                                <label className='card-role' htmlFor='card3'>
                                    <img src={require('../images/img-3t.png')} alt='img-clip' />
                                    <h5 className='font-bold mb-2'>I'm looking for design aspiration</h5>
                                    <input checked={values.roles.includes("I'm looking for design aspiration")} value="I'm looking for design aspiration" onChange={handleChange} name='roles' className='role-check' id='card3' type='checkbox' />
                                </label>
                            </div>
                        </div>
                        <div className='mt-10'>
                            {errors.roles && touched.roles ? (
                                <div className="text-red-500 justify-center flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.roles}</span></div>
                            ) : null}
                            <h5 className='font-bold'>Anything else? You can select multiple</h5>
                        </div>

                        <button type="submit" className=" mt-5 text-sm outline-none bg-ea478b px-14 py-2 text-white rounded-md">Finish</button>
                    </form>
                    <div className='mt-4 text-xs text-g9c9da5 font-bold'>
                        or Press<Link to='/create-profile'> RETURN</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
