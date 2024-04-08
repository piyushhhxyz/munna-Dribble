import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useAuth } from "../contexts/AuthContext";

const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    checkt_c: false
}

export default function Signup() {
    const { signup, error, isLoggedIn } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            return navigate("/");
        }
    }, [isLoggedIn]);

    const signupSchema = Yup.object({
        name: Yup.string().min(2).max(15).required("Please enter your name"),
        email: Yup.string().email().required("Please enter your email"),
        username: Yup.string().min(2).max(15).required("Please enter your username"),
        password: Yup.string().min(6).required("Please enter your password"),
        checkt_c: Yup.boolean().oneOf([true], 'You must agree to the terms and services'),
    })

    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            signup(values)
        }
    })


    return (
        <>
            <div className="flex h-screen">
                <div className="w-2/5  bg-customYellow sg-left">
                    <Link to='/'><img className="h-5 mt-14 ml-14" src={require('../images/logo-dark.png')} alt="img-clip" /></Link>

                    <div className="text-textYellow font-poppins text-2xl font-extrabold mt-6 ml-14">
                        <div>Discover the world's top</div> <div>Designers & Creatives.</div>
                    </div>
                        <img className="mt-1" src={require('../images/001_4x.png')} alt="img-clip" />
                        <div className="ml-14 mt-10 text-textYellow font-poppins text-xs">Art by <u>Peter Tarka</u></div>
                </div>
                <div className="w-3/5 bg-white overflow-y-auto sg-right">
                    <div className="text-right text-sm mt-6 mr-5">Already a member?<Link to='/login' className="text-blue-500"> Sign in</Link></div>
                    <div className="w-1/2 mx-auto sg-w">
                        <h2 className="font-extrabold text-2xl mt-5">Sign up to Dribbble</h2>
                        {error ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{error}</span></div>
                        ) : null}
                        {errors.name && touched.name ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.name}</span></div>
                        ) : null}
                        {errors.username && touched.username ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.username}</span></div>
                        ) : null}
                        {errors.email && touched.email ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.email}</span></div>
                        ) : null}
                        {errors.password && touched.password ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.password}</span></div>
                        ) : null}
                        {errors.checkt_c && touched.checkt_c ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.checkt_c}</span></div>
                        ) : null}
                        <form onSubmit={handleSubmit}>
                            <div className="flex gap-4 mt-10">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor='name' className="font-bold flex" >
                                        {errors.name && touched.name ? (
                                            <span className="text-red-500 mr-1">
                                                <i className="fa-solid fa-triangle-exclamation"></i>
                                            </span>
                                        ) : null}Name</label>
                                    <input id="name" className={errors.name && touched.name ? "bg-ffeeee rounded-md outline-none px-3 py-2 text-sm w-full" : "bg-f3f3f3 rounded-md outline-none px-3 py-2 text-sm w-full"} type="text" name="name" value={values.name} onChange={handleChange} />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label className="font-bold flex" htmlFor='username' >
                                        {(errors.username && touched.username) || (error === 'Username has already been taken') ? (
                                            <span className="text-red-500 mr-1">
                                                <i className="fa-solid fa-triangle-exclamation"></i>
                                            </span>
                                        ) : null}Username</label>
                                    <input id="username" className={(errors.username && touched.username) ? "bg-ffeeee rounded-md outline-none px-3 py-2 text-sm w-full" : "bg-f3f3f3 rounded-md outline-none px-3 py-2 text-sm w-full"} name="username" type="text" value={values.username} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="flex flex-col mt-7">
                                <label className="font-bold flex" htmlFor='email' >
                                    {(errors.email && touched.email) || (error === 'Email already exists') ? (
                                        <span className="text-red-500 mr-1">
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                        </span>
                                    ) : null}Email</label>
                                <input id="email" className={(errors.email && touched.email) ? "bg-ffeeee rounded-md outline-none px-3 py-2 text-sm" : "bg-f3f3f3 rounded-md outline-none px-3 py-2 text-sm"} name="email" type="email" value={values.email} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col mt-7">
                                <label className="font-bold flex" htmlFor='password' >
                                    {errors.password && touched.password ? (
                                        <span className="text-red-500 mr-1">
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                        </span>
                                    ) : null}Password</label>
                                <input id="password" className={errors.password && touched.password ? "bg-ffeeee rounded-md outline-none px-3 py-2 text-sm" : "bg-f3f3f3 rounded-md outline-none px-3 py-2 text-sm"} name="password" type="password" placeholder="6+ characters" value={values.password} onChange={handleChange} />
                            </div>
                            <div className="mt-5 text-sm flex">
                                <input name="checkt_c" className="checkbox" type="checkbox" checked={values.checkt_c} onChange={handleChange} />
                                <span className="text-616066"> Creating an account means you are okay with our <a className="text-blue-500" href="#">Terms of Service</a>, <a className="text-blue-500" href='#'
                                >Privacy Policy</a> and our default <a className="text-blue-500" href="#">Notification Settings.</a></span>
                            </div>
                            <button type="submit" className="text-sm mt-5 outline-none bg-ea478b px-8 py-2 text-white rounded-md">Create Account</button>
                        </form>
                        <div className="text-xs mt-5">
                            <span className="text-616066"> This is protected by reCAPTCHA and the Google <br /><a className="text-blue-500" href='#'
                            >Privacy Policy</a> and  <a className="text-blue-500" href="#">Terms of Service</a> and apply.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
