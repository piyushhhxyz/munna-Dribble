import React from 'react'

export default function footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='py-14 bg-f3f3f3 flex justify-evenly hd-bf'>
                <div className='ft-rg'>
                    <img style={{ height: "5rem" }} src={require('../images/logo-pink.png')} alt="img-clip" />
                    <p className='text-xs text-616066 text-hg'>Dribbble is the world's leading<br /> community for creatives to share, grow, <br />and get hired.</p>
                    <div className='flex text-sm gap-5 mt-5'>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div style={{ width: "70%" }} className='flex justify-between ft-jf'>
                    <div>
                        <div className='text-sm font-bold ft-ghgh'>For Designers</div>
                        <div className='ft-txt'>
                            <div className='text-xs mt-3'>Go pro!</div>
                            <div className='text-xs mt-3'>Explore design work</div>
                            <div className='text-xs mt-3'>Design blog</div>
                            <div className='text-xs mt-3'>Overtime podcast</div>
                            <div className='text-xs mt-3'>Playoffs</div>
                            <div className='text-xs mt-3'>Weekly Warm-Up</div>
                            <div className='text-xs mt-3'>Refer a Friend</div>
                            <div className='text-xs mt-3'>Code of Conduct</div>
                        </div>
                    </div>
                    <div >
                        <div className='text-sm font-bold ft-ghgh'>Hire Designers</div>
                        <div className='ft-txt'>
                            <div className='text-xs mt-3'>Post a job opening</div>
                            <div className='text-xs mt-3'>Post a freelance project</div>
                            <div className='text-xs mt-3'>Search for designers</div>
                            <div className='text-xs mt-3'>Overtime podcast</div>
                            <div className='text-xs mt-3 font-bold'>Brands</div>
                            <div className='text-xs mt-3'>Advertise with us</div>
                        </div>
                    </div>
                    <div >
                        <div className='text-sm font-bold ft-ghgh'>Company</div>
                        <div className='ft-txt'>
                            <div className='text-xs mt-3'>About</div>
                            <div className='text-xs mt-3'>Careers</div>
                            <div className='text-xs mt-3'>Support</div>
                            <div className='text-xs mt-3'>Media kit</div>
                            <div className='text-xs mt-3'>Testimonials</div>
                            <div className='text-xs mt-3'>API</div>
                            <div className='text-xs mt-3'>Terms of service</div>
                            <div className='text-xs mt-3'>Privacy policy</div>
                            <div className='text-xs mt-3'>Cookie policy</div>
                        </div>
                    </div>
                    <div>
                        <div className='text-sm font-bold ft-ghgh'>Directories</div>
                        <div className='ft-txt'>
                            <div className='text-xs mt-3'>Design jobs</div>
                            <div className='text-xs mt-3'>Designers for hire</div>
                            <div className='text-xs mt-3'>Freelance designers for hire</div>
                            <div className='text-xs mt-3'>Tags</div>
                            <div className='text-xs mt-3'>Places</div>
                            <div className='text-xs mt-3 font-bold'>Design assets</div>
                            <div className='text-xs mt-3'>Dribbble marketplace</div>
                            <div className='text-xs mt-3'>Creative market</div>
                            <div className='text-xs mt-3'>Fontspring</div>
                            <div className='text-xs mt-3'>Font squirrel</div>
                        </div>
                    </div>
                    <div >
                        <div className='text-sm font-bold ft-ghgh'>Design Resources</div>
                        <div className='ft-txt'>
                            <div className='text-xs mt-3'>Freelancing</div>
                            <div className='text-xs mt-3'>Design Hiring</div>
                            <div className='text-xs mt-3'>Design Porfolio</div>
                            <div className='text-xs mt-3'>Design Education</div>
                            <div className='text-xs mt-3'>Creative process</div>
                            <div className='text-xs mt-3 '>Design Industry Trends</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-f3f3f3'>
                <hr className='w-4/5 mx-auto bg-616066' />
                <div className='flex justify-between items-center py-10 px-14 ft-cr'>
                    <div className=' text-xs text-616066'>
                        &copy; {currentYear}  Dribbble. All right reserved.
                    </div>
                    <div className='text-xs flex ft-hg'>
                        <span className='font-bold mr-1'>20,501,853</span>
                        <span className=' text-616066 mr-1'>shots dribbbled</span>
                        <span><img style={{ width: "15px" }} src={require('../images/pngegg.png')} alt='img-clip' /></span>
                    </div>
                </div>
            </div>
        </>
    )
}
