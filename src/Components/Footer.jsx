// import React from 'react'

// const Footer = () => {
//     return (
//         <div className='w-full h-[100vh] bg-[#670fff] text-white flex flex-col items-center justify-center px-[100px]'>
//             <div className='w-full h-[40vh] bg-white rounded-[20px] flex justify-between items-center px-[40px] py-[100px]'>
//                 <p className='text-[40px] font-medium text-black max-w-[700px]'>Let's create and learn  something remarkable together.</p>
//                 <button className='px-[35px] w-[180px] py-[15px] bg-[#670fff] rounded-[15px] text-[18px]'>Contact Us</button>
//             </div>
//             <div className='secondsection w-full flex justify-between text-white py-[50px]'>
//                 <div>
//                     <p className='text-[35px]'>T-Machine Software Solutions </p>
//                     <p className='text-[18px]'>AI-Driven E-Learning Transformation for all learners.</p>
//                 </div>
//                 <div className='w-1/3 flex justify-between'>
//                     <div className='flex flex-col gap-2 text-[18px]'>
//                         <p>Products</p>
//                         <p>Tmachine.ai</p>
//                         <p>Imachine.ai</p>
//                     </div>
//                     <div className='flex flex-col gap-2 text-[18px]'>
//                         <p>Learn</p>
//                         <p>Program</p>
//                         <p>Training Program</p>
//                         <p>Placement Program</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='w-full h-[2px] bg-white'>
//             </div>
//             <div className='w-full flex justify-between items-center text-[18px] mt-[30px]'>
//                 <div className='w-1/4 flex justify-between items-center text-[18px]'>
//                     <p>Privacy</p>
//                     <p>Terms</p>
//                 </div>
//                 <p>2024 T-Machine Software Solutions.All rights reserved</p>
//             </div>
//         </div>
//     )
// }

// export default Footer
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    // Ref for the secondsection div
    const secondSectionRef = useRef(null);

    useEffect(() => {
        // Animate text in the second section when the scroll trigger hits top 50%
        gsap.fromTo(secondSectionRef.current.querySelectorAll('p'),
            { y: 100 },  // Initial position (text slides up)
            {
                y: 0,      // End position (text at its normal spot)
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: secondSectionRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none',
                }
            });
    }, []);

    return (
        <div className=' w-full h-auto lg:h-[100vh] bg-[#670fff] text-white flex flex-col items-center justify-center px-[20px] md:px-[50px] lg:px-[100px] '>
            {/* Top Section */}
            <div className='w-full h-auto  lg:h-[40vh] bg-white rounded-[20px] flex flex-col lg:flex-row justify-between items-center px-[20px] md:px-[40px] py-[30px] lg:py-[100px] '>
                <p className='text-[25px] md:text-[30px] lg:text-[40px] font-medium text-black max-w-[700px] text-center lg:text-left mb-5 lg:mb-0'>
                    Let's create and learn something remarkable together.
                </p>
                <button className='px-[20px] md:px-[30px] lg:px-[35px] py-[10px] md:py-[12px] lg:py-[15px] w-full md:w-auto bg-[#670fff] hover:border hover:border-[#670fff] hover:bg-white hover:text-[#670fff] transition duration-[0.5s] rounded-[15px] text-[16px] md:text-[18px]'>
                    Contact Us
                </button>
            </div>

            {/* Second Section with animation */}
            <div
                ref={secondSectionRef}
                className='secondsection w-full  flex flex-col lg:flex-row lg:justify-between text-white py-[30px] md:py-[50px] px-[20px] md:px-[40px] lg:px-[0px] mt-[30px]'>
                <div className='text-center lg:text-left mb-5 lg:mb-0 flex flex-col gap-11 '>
                    <div>
                        <p className='text-[25px] md:text-[30px] lg:text-[35px]'>T-Machine Software Solutions</p>
                        <p className='text-[16px] md:text-[18px]'>AI-Driven E-Learning Transformation for all learners.</p>
                    </div>
                    <div className='flex gap-4'>
                        <div className='text-[35px] text-white  rounded-full'>
                            <FaLinkedin />
                        </div>
                        <div className='text-[35px] text-white  rounded-full'>
                            <FaFacebook />
                        </div>

                    </div>
                </div>
                <div className='w-full lg:w-1/3 flex flex-col md:flex-row justify-between items-center lg:items-start text-center lg:text-left'>
                    <div className='flex flex-col gap-2 text-[16px] md:text-[18px] mb-5 md:mb-0'>
                        <p>Products</p>
                        <p>Tmachine.ai</p>
                        <p>Imachine.ai</p>
                    </div>
                    <div className='flex flex-col gap-2 text-[16px] md:text-[18px]'>
                        <p>Learn</p>
                        <p>Program</p>
                        <p>Training Program</p>
                        <p>Placement Program</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='w-full h-[2px] bg-white mt-[20px] lg:mt-[0px] '></div>

            {/* Bottom Section */}
            <div className='w-full flex flex-col lg:flex-row justify-between items-center text-[16px] md:text-[18px] px-[20px] md:px-[40px] lg:px-[0px] py-[20px] lg:py-[30px]'>
                <div className='w-full lg:w-1/4 flex justify-between items-center mb-5 lg:mb-0'>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
                <p className='text-center lg:text-left'>2024 T-Machine Software Solutions. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
