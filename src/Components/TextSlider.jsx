// import React from 'react'
// import { ImHappy2 } from "react-icons/im";
// const TextSlider = () => {
//     return (
//         <div className='textslider mt-[220px] w-full h-[25vh] flex items-center gap-3 bg-[#670fff] px-[1vw] overflow-hidden'>
//             <div className='one flex gap-5 items-center '>
//                 <div className='text-[#ffffff] text-[55px]'>
//                     <ImHappy2 />
//                 </div>
//                 <p className='text-[70px] text-white font-medium '>Webdevelopment</p>
//                 <div className='text-[#ffffff] text-[55px]'>
//                     <ImHappy2 />
//                 </div>
//                 <h1 className='text-[70px] text-white font-medium'>Artificialintelligence</h1>
//                 <div className='text-[#ffffff] text-[55px]'>
//                     <ImHappy2 />
//                 </div>
//                 <h1 className='text-[70px] text-white font-medium'>Blockchain</h1>
//                 <div className='text-[#ffffff] text-[55px]'>
//                     <ImHappy2 />
//                 </div>
//                 <h1 className='text-[70px] text-white font-medium'>Internetofthings</h1>
//             </div>
//         </div>
//     )
// }

// export default TextSlider
import React, { useEffect, useRef } from 'react';
import { ImDiamonds } from "react-icons/im";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextSlider = () => {
    // Ref for the element with class 'one'
    const sliderRef = useRef(null);

    useEffect(() => {
        // Animate all children inside the 'one' div
        gsap.fromTo(
            sliderRef.current.children,
            { x: '100vw' }, // Start outside the viewport (right)
            {
                x: '-230vw', // End outside the viewport (left)
                duration: 15, // Total duration of the animation
                ease: 'none',
                repeat: -1, // Infinite repeat
                stagger: 1, // Delay between the start of each animation
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none',
                }
            }
        );
    }, []);

    return (
        <div className='textslider mt-[220px] w-full h-[25vh] flex items-center  bg-[#670fff] px-[1vw] overflow-hidden'>
            <div ref={sliderRef} className='one flex items-center whitespace-nowrap'>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffffff] text-[45px]'>
                        <ImDiamonds />
                    </p>
                    <p className='text-[70px] text-white font-medium'>Web Development</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffffff] text-[45px]'>
                        <ImDiamonds />
                    </p>
                    <p className='text-[70px] text-white font-medium'>Artificial Intelligence</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffffff] text-[45px]'>
                        <ImDiamonds />
                    </p>
                    <p className='text-[70px] text-white font-medium'>Internet of things</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#ffffff] text-[45px]'>
                        <ImDiamonds />
                    </p>
                    <p className='text-[70px] text-white font-medium'>Block chain Technologies</p>
                </div>

            </div>
        </div>
    );
}

export default TextSlider;
