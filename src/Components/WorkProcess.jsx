// import React from 'react'

// const WorkProcess = () => {
//     return (
//         <div className='w-full flex flex-col justify-center items-center gap-3 mt-[100px] mb-[100px]'>
//             <h1 className='heading text-[#670fff] text-[20px]'>Our Work Process</h1>
//             <p className='para max-w-[400px] text-[26px] text-center'>We follow a simple work process for work</p>
//             <div className='w-full grid grid-cols-4 gap-5'>
//                 <div className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center  gap-2 items-center px-[8px] py-[76px] rounded-[20px]'>
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff] '>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>1</p>
//                     </div>
//                     <h1 className='text-[20px]'>Choose a service</h1>
//                     <p className='text-[17px] text-center'>Great service providers listen first, listen and well</p>
//                 </div>
//                 <div className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center  gap-2 items-center px-[8px] py-[76px] rounded-[20px]'>
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff] '>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>2</p>
//                     </div>
//                     <h1 className='text-[20px]'>Request a meeting</h1>
//                     <p className='text-[17px] text-center'>Feel free to prefer another time and location for you</p>
//                 </div>
//                 <div className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center  gap-2 items-center px-[8px] py-[76px] rounded-[20px]'>
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff] '>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>3</p>
//                     </div>
//                     <h1 className='text-[20px]'>Get custom plans</h1>
//                     <p className='text-[17px] text-center'>Purchasing a custom drawn home plan ensures you get</p>
//                 </div>
//                 <div className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center  gap-2 items-center px-[8px] py-[76px] rounded-[20px]'>
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff] '>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>4</p>
//                     </div>
//                     <h1 className='text-[20px]'>Successfully done</h1>
//                     <p className='text-[17px] text-center'>Successfully done a project most popular phrase service</p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default WorkProcess
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const WorkProcess = () => {
//     // Create refs for the elements
//     const workProcessRef = useRef(null);
//     const headingRef = useRef(null);
//     const paraRef = useRef(null);
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         // Timeline to animate heading and paragraph
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: workProcessRef.current, // The section to trigger on
//                 start: 'top 50%', // Start when the section top hits 50% of the viewport
//                 toggleActions: 'play none none none', // Play animation on scroll
//             },
//         })
//             .fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }) // Animate heading
//             .fromTo(paraRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5'); // Animate paragraph

//         // Animate each card as they scroll into view
//         gsap.fromTo(cardsRef.current,
//             { y: 50, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 2,
//                 ease: 'power3.out',
//                 stagger: 0.3,
//                 scrollTrigger: {
//                     trigger: cardsRef.current[0], // Trigger when the first card hits
//                     start: 'top 60%',
//                     toggleActions: 'play none none none',
//                 }
//             });
//     }, []);

//     return (
//         <div ref={workProcessRef} className='w-full flex flex-col justify-center items-center gap-3 mt-[100px] mb-[100px]'>
//             <h1 ref={headingRef} className='heading text-[#670fff] text-[20px]'>Our Work Process</h1>
//             <p ref={paraRef} className='para max-w-[400px] text-[26px] text-center'>We follow a simple work process for work</p>
//             <div className='allcards w-full grid grid-cols-4 gap-5'>
//                 <div
//                     ref={(el) => cardsRef.current[0] = el}
//                     className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center gap-2 items-center px-[8px] py-[76px] rounded-[20px]'
//                 >
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff]'>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>1</p>
//                     </div>
//                     <h1 className='text-[20px]'>Choose a service</h1>
//                     <p className='text-[17px] text-center'>Great service providers listen first, listen and well</p>
//                 </div>
//                 <div
//                     ref={(el) => cardsRef.current[1] = el}
//                     className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center gap-2 items-center px-[8px] py-[76px] rounded-[20px]'
//                 >
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff]'>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>2</p>
//                     </div>
//                     <h1 className='text-[20px]'>Request a meeting</h1>
//                     <p className='text-[17px] text-center'>Feel free to prefer another time and location for you</p>
//                 </div>
//                 <div
//                     ref={(el) => cardsRef.current[2] = el}
//                     className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center gap-2 items-center px-[8px] py-[76px] rounded-[20px]'
//                 >
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff]'>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>3</p>
//                     </div>
//                     <h1 className='text-[20px]'>Get custom plans</h1>
//                     <p className='text-[17px] text-center'>Purchasing a custom drawn home plan ensures you get</p>
//                 </div>
//                 <div
//                     ref={(el) => cardsRef.current[3] = el}
//                     className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center gap-2 items-center px-[8px] py-[76px] rounded-[20px]'
//                 >
//                     <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff]'>
//                         <p className='absolute top-3 left-8 text-[40px] text-white'>4</p>
//                     </div>
//                     <h1 className='text-[20px]'>Successfully done</h1>
//                     <p className='text-[17px] text-center'>Successfully done a project most popular phrase service</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WorkProcess;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkProcess = () => {
    const workProcessRef = useRef(null);
    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: workProcessRef.current,
                start: 'top 50%',
                toggleActions: 'play none none none',
            },
        })
            .fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' })
            .fromTo(paraRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5');

        gsap.fromTo(cardsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: 'top 60%',
                    toggleActions: 'play none none none',
                }
            });
    }, []);

    return (
        <div ref={workProcessRef} className='w-full flex flex-col justify-center items-center gap-3 mt-[100px] mb-[100px]'>
            <h1 ref={headingRef} className='heading text-[#670fff] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]'>Our Work Process</h1>
            <p ref={paraRef} className='para max-w-[400px] text-[20px] sm:text-[24px] md:text-[26px] text-center'>We follow a simple work process for work</p>
            <div className='allcards w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {["Choose a service", "Request a meeting", "Get custom plans", "Successfully done"].map((text, index) => (
                    <div
                        key={index}
                        ref={(el) => cardsRef.current[index] = el}
                        className='cards mt-[50px] border border-[#670fff] flex flex-col justify-center gap-2 items-center px-[8px] py-[40px] rounded-[20px]'
                    >
                        <div className='relative w-[88px] h-[87px] rounded-full bg-[#670fff]'>
                            <p className='absolute top-3 left-8 text-[40px] text-white'>{index + 1}</p>
                        </div>
                        <h1 className='text-[20px] text-center'>{text}</h1>
                        <p className='text-[17px] text-center'>
                            {index === 0 ? "Great service providers listen first, listen and well" :
                            index === 1 ? "Feel free to prefer another time and location for you" :
                            index === 2 ? "Purchasing a custom drawn home plan ensures you get" :
                            "Successfully done a project most popular phrase service"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkProcess;


