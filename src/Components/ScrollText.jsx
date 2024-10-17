import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
    // Thi is completely working fine

    useEffect(() => {
        // Create GSAP animation with ScrollTrigger
        const trigger = gsap.to("#page2 h1", {
            x: '-750%',              // Translate the text left by 50%
            duration: 3,
            scrollTrigger: {
                trigger: "#page2",
                // pin: true,              // Pin the element during scroll
                // markers: true,          // Show markers for debugging
                start: 'top 50%',       // Pin starts when the top of the element hits the top of the viewport
                end: '+=100%',          // Pin lasts for the height of one viewport
                scrub: true,            // Smooth scrolling animation
            },
        });
        // Cleanup ScrollTrigger instance on component unmount
        return () => {
            trigger.scrollTrigger.kill();  // Properly kill the ScrollTrigger instance
        };
    }, []);

    return (
        <div className='w-full h-auto '>
            <div id='page2' className=' bg-white overflow-hidden'>
                <h1 className='text-[20vw] whitespace-nowrap font-bold uppercase text-[#670fff]'>Leading the Future of tech innovation and shaping a brighter tomorrow</h1>
            </div>
        </div>
    );
};

export default ScrollText;

