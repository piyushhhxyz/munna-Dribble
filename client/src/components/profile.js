import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";
import { useFormik } from "formik"
import * as Yup from "yup"


const initialValues = {
    location: '',
    profilepic: null
}

export default function Profile() {
    const { isLoggedIn, profile, user } = useAuth();

    const profileSchema = Yup.object({
        location: Yup.string().min(2).max(15).required("Please enter your location"),
    })

    const { values, touched, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: profileSchema,
        onSubmit: (values) => {
            profile(values)
        }
    })

    const [selectedImage, setSelectedImage] = useState(null);
    const [icondrop, setIcondrop] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const showColor = () => {
        if (icondrop) {
            setIcondrop(false)
        } else {
            setIcondrop(true)
        }
    }

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if (imageFile instanceof Blob) {
            try {
                setSelectedImage(URL.createObjectURL(imageFile));
            } catch (error) {

            }
        }
    };
    const clearFileInput = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        setSelectedImage(user.profilepic)
    }, [])

    return (
        <div>
            <Link to='/'><img style={{ height: "6rem" }} className="mt-4 ml-14 img-l" src={require('../images/logo-pink.png')} alt="img-clip" /></Link>
            <div className='flex items-center justify-center pro-pd'>
                <div>
                    <h2 className="font-bold text-3xl text-l">Welcome! Let's create your profile</h2>
                    <div className='text-sm text-616066 mt-4'>Let others get to know you better! You can do these later</div>
                    <div className='mt-8 font-bold'>
                        Add an avatar
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-5 flex gap-10'>
                            <div className='relative' onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                <label style={{ background: `url(${selectedImage}) center/cover`, border: selectedImage ? 'none' : '' }} htmlFor='input-file' id='drop-area'>
                                    {selectedImage ? null : <span className="material-symbols-outlined text-g9c9da5">
                                        add_a_photo
                                    </span>}
                                </label>
                                {(isHovered && selectedImage) ? (
                                    <div className='delete-img'
                                        onClick={clearFileInput}>
                                        <i className="fa-solid fa-trash fa-xs"></i>
                                    </div>
                                ) : null}
                            </div>
                            <input name='profilepic' className='hidden' type='file' accept='image/*' id='input-file' onChange={(e) => {
                                setFieldValue('profilepic', e.currentTarget.files[0]); handleImageChange(e)
                            }} />
                            <div>
                                <label className='text-sm border-2 border-e0e0e0 cursor-pointer py-2 px-4 rounded-3xl' htmlFor='input-file'>Choose image</label>
                                <div className='mt-7 text-g9c9da5 text-sm cursor-pointer hover:text-616066' onClick={showColor}><i className={icondrop ? "fa-solid fa-angle-right icon-drop transition-all duration-300" : "fa-solid fa-angle-right transition-all duration-300"} ></i> Or choose one of our defaults</div>
                                <div className={icondrop ? "container mt-4 cc" : "container mt-4 "}>

                                </div>
                            </div>
                        </div>
                        <div className='mt-7 mb-4 font-bold'>
                            Add your location
                        </div>
                        {errors.location && touched.location ? (
                            <div className="text-red-500 flex items-center"><span style={{ fontSize: "7px" }}><i className="fa-solid fa-circle mr-1"></i></span> <span className="text-sm">{errors.location}</span></div>
                        ) : null}
                        <div>
                            <input name='location' type='text' placeholder='Enter a location' className={errors.location && touched.location ? 'text-sm outline-none border-b-2 py-2 w-full border-red-500' : 'text-sm outline-none border-b-2 py-2 w-full border-e0e0e0'} value={values.location} onChange={handleChange} />
                        </div>
                        <button type="submit" className=" mt-7 text-sm outline-none bg-ea478b px-14 py-2 text-white rounded-md">Next</button>
                    </form>
                    <div className='mt-4 text-xs text-g9c9da5 font-bold'>
                        or Press<Link to='/'> RETURN</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
