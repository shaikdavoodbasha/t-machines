// import React from 'react'

// const Contact = () => {
//     return (
//         <div className='w-full flex gap-1 items-center my-[100px]'>
//             <div className='leftside basis-[50%] flex flex-col gap-3 text-[#670fff] border px-[50px] p-[40px] rounded-[15px]'>
//                 <p className='text-[18px]'>Conatact details love to hear from you</p>
//                 <p className='text-[18px]'>Our location</p>
//                 <p className='text-[18px]'>2nd Floor, West Wing,VV Towers, No:16, Rajiv Gandhi Salai, OMR, karapakkam,Chennai, TamilNadu - 600097, INDIA.</p>
//                 <p className='text-[18px]'> Email : contact@tmachinesoftware.com</p>
//                 <p className='text-[18px]'>Phone: 1800121000055</p>
//                 <p className='text-[18px]'>Social Media : linkedin   Facebook</p>
//             </div>
//             <div className='rightside basis-[50%] flex flex-col justify-start items-start gap-1  '>
//                 <input type="text" className='bg-[#670fff] w-full h-[50px] pl-[20px]  rounded-[10px] border-none outline-none text-[18px] text-white placeholder:text-white ' placeholder='Enter Your Name' />
//                 <input type="text" className='bg-[#670fff] w-full h-[50px] pl-[20px]  rounded-[10px] border-none outline-none text-[18px] text-white placeholder:text-white ' placeholder='Enter Your Mail' />
//                 <textarea type="text" className='bg-[#670fff] w-full h-[200px] pl-[20px] pt-[20px]  rounded-[10px] border-none outline-none text-[18px] text-white placeholder:text-white ' placeholder='Enter Your Mail' />
//                 <button className='border border-[#670fff] w-full h-[45px] pl-[20px]  rounded-[10px]  text-[18px] text-[#670fff] hover:bg-[#670fff] hover:text-white transition duration-[1s] ease-in  ' >Submit</button>


//             </div>
//         </div>
//     )
// }

// export default Contact
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    // Refs for animations
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);

    useEffect(() => {
        // Left side animation (similar to the left section in TeamMembers)
        gsap.fromTo(leftSideRef.current,
            { x: -100 }, // Start off-screen
            {
                x: 0, // End at the original position
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: leftSideRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });

        // Right side animation (similar to the right section in TeamMembers)
        gsap.fromTo(rightSideRef.current,
            { x: 100 }, // Start off-screen
            {
                x: 0, // End at the original position
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: rightSideRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none',
                }
            });
    }, []);

    return (
        <div className='w-full flex flex-col lg:flex-row gap-5 items-center my-[50px] px-5'>
            {/* Left side with GSAP animation */}
            <div
                ref={leftSideRef}
                className='leftside basis-[100%] lg:basis-[50%] flex flex-col gap-3 text-[#670fff] border px-[30px] p-[30px] lg:py-[40px] rounded-[15px] mb-10 lg:mb-0'
            >
                <p className='text-[20px]'>Contact details, love to hear from you</p>
                <p className='text-[20px]'>Our location</p>
                <p className='text-[20px]'>2nd Floor, West Wing, VV Towers, No:16, Rajiv Gandhi Salai, OMR, Karapakkam, Chennai, Tamil Nadu - 600097, INDIA.</p>
                <p className='text-[20px]'>Email: contact@tmachinesoftware.com</p>
                <p className='text-[20px]'>Phone: 1800121000055</p>
                <p className='text-[20px]'>Social Media: LinkedIn, Facebook</p>
            </div>

            {/* Right side with GSAP animation */}
            <div
                ref={rightSideRef}
                className='rightside basis-[100%] lg:basis-[50%] flex flex-col justify-start items-start gap-3 w-full'
            >
                <input
                    type="text"
                    className='bg-[#670fff] w-full h-[50px] pl-[20px] rounded-[10px] border-none outline-none text-[18px] text-white placeholder:text-white'
                    placeholder='Enter Your Name'
                />
                <input
                    type="text"
                    className='bg-[#670fff] w-full h-[50px] pl-[20px] rounded-[10px] border-none outline-none text-[18px] text-white placeholder:text-white'
                    placeholder='Enter Your Mail'
                />
                <textarea
                    type="text"
                    className='bg-[#670fff] w-full h-[200px] pl-[20px] pt-[20px] rounded-[10px] border-none outline-none text-[18px] text-white placeholder:text-white'
                    placeholder='Enter Your Message'
                />
                <button
                    className='border border-[#670fff] w-full h-[45px] rounded-[10px] text-[18px] text-[#670fff] hover:bg-[#670fff] hover:text-white transition duration-[1s] ease-in'
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Contact;
