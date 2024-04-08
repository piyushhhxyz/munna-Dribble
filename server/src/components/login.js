import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
    email: "",
    password: "",
}
export default function Login() {
    const { isLoggedIn, errorl, login } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            console.log(isLoggedIn)
            return navigate("/");
        }
    }, [isLoggedIn]);

    const signupSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email"),
        password: Yup.string().required("Please enter your password"),
       
    })

    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            login(values)
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
                <div className="w-3/5 bg-white overflow-y-auto flex items-center sg-right">

                    <div className="w-1/2 mx-auto sg-w">
                        <h2 className="font-extrabold text-2xl mt-5">Login to Dribbble</h2>
                        {errorl ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errorl}</span></div>
                        ) : null}
                        {errors.email && touched.email ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.email}</span></div>
                        ) : null}
                        {errors.password && touched.password ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.password}</span></div>
                        ) : null}
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mt-7">
                                <label className="font-bold flex" htmlFor='email' >
                                    {(errors.email && touched.email) || (errorl === 'Email already exists') ? (
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

                            <button type="submit" className="text-sm mt-5 outline-none bg-ea478b px-8 py-2 text-white rounded-md">Login</button>
                            <div className=" text-sm mt-6 mr-5">Don't have account?<Link to='/signup' className="text-blue-500"> Signup</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
