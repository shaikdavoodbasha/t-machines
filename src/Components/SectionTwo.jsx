// import React from 'react'
// import imgone from "../assets/cloud.png"
// import imgtwo from "../assets/ai.png"
// import imgthree from "../assets/bigdata.png"

// const SectionTwo = () => {
//     return (
//         <div className='w-[87vw] border h-[100vh] flex justify-between mt-10'>
//             <div className='cardone w-[27vw] h-[50vh] border border-[#670FFF] flex flex-col justify-center items-center px-5 rounded-[20px]'>
//                 <img className='w-[122px] h-[118]' src={imgone} alt="" />
//                 <h1 className='max-w-[400px]  text-[20px]'>Cloud - Optimized Collaboration</h1>
//                 <div>
//                     <p className='max-w-[550px] text-[16px] text-center pt-2'>Collaborate effortlessly and seamlessly with our cloud-powered interface.</p>
//                 </div>
//             </div>
//             <div className='cardtwo w-[27vw] h-[50vh] border border-[#670FFF] flex flex-col justify-center items-center px-5 rounded-[20px]'>
//                 <img className='w-[122px] h-[118]' src={imgtwo} alt="" />
//                 <h1 className='max-w-[500px] text-[23px]'>Algorithmic AI&Matching Text</h1>
//                 <div>
//                     <p className='max-w-[550px] text-[16px] text-center pt-2'>Unleash creativity with AI algorithms and interactive UX/UI prototyping..</p>
//                 </div>
//             </div>
//             <div className='cardthree w-[27vw] h-[50vh] border border-[#670FFF] flex flex-col justify-center items-center px-5 rounded-[20px]'>
//                 <img className='w-[122px] h-[118]' src={imgthree} alt="" />
//                 <h1 className='max-w-[500px] text-[20px]'>Data & Quality Expertise Ethically</h1>
//                 <div>
//                     <p className='max-w-[550px] text-[16px] text-center pt-2'>Protect and safeguard your data with cutting-edge security in scalable design systems..</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SectionTwo
import React, { useEffect, useRef } from 'react'
import imgone from "../assets/cloud.png"
import imgtwo from "../assets/ai.png"
import imgthree from "../assets/bigdata.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionTwo = () => {
    const cardOneRef = useRef(null)
    const cardTwoRef = useRef(null)
    const cardThreeRef = useRef(null)

    useEffect(() => {
        // Timeline for animation with ScrollTrigger
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.sectiontwo', // Trigger when the entire section scrolls into view
                start: 'top 50%', // When top of section hits 50% of viewport
                toggleActions: 'play none none none', // Play animation once
            },
        })

        // Animations for each card
        timeline
            .fromTo(cardOneRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 3, ease: 'power3.out' })
            .fromTo(cardTwoRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 3, ease: 'power3.out' }, '-=2.5')
            .fromTo(cardThreeRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 3, ease: 'power3.out' }, '-=2.5')

    }, [])

    const handleHover = (ref) => {
        // Crazy hover animation
        gsap.to(ref.current, {
            scale: 1.1, // Increase size
            rotate: 10, // Rotate slightly
            boxShadow: '0px 20px 30px rgba(0,0,0,0.2)', // Add a shadow
            duration: 0.5, // Animation duration for hover
            ease: 'power3.out',
        })
    }

    const handleHoverOut = (ref) => {
        // Reverse hover animation
        gsap.to(ref.current, {
            scale: 1,
            rotate: 0,
            boxShadow: '0px 10px 15px rgba(0,0,0,0.1)', // Reset the shadow
            duration: 0.5,
            ease: 'power3.out',
        })
    }

    return (
        <div className='sectiontwo grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            <div
                ref={cardOneRef}
                className='cardone py-[50px]  border border-[#670FFF] flex flex-col justify-center items-center px-5 rounded-[20px]'
                onMouseEnter={() => handleHover(cardOneRef)}
                onMouseLeave={() => handleHoverOut(cardOneRef)}
            >
                <img className='w-[122px] h-[118]' src={imgone} alt="" />
                <h1 className='max-w-[400px] text-[18px] md:text-[18px] lg:text-[20px]'>Cloud - Optimized Collaboration</h1>
                <div>
                    <p className='max-w-[550px] text-[16px] text-center pt-2'>Collaborate effortlessly and seamlessly with our cloud-powered interface.</p>
                </div>
            </div>

            <div
                ref={cardTwoRef}
                className='cardtwo py-[50px]  border border-[#670FFF] flex flex-col justify-center items-center px-5 rounded-[20px]'
                onMouseEnter={() => handleHover(cardTwoRef)}
                onMouseLeave={() => handleHoverOut(cardTwoRef)}
            >
                <img className='w-[122px] h-[118]' src={imgtwo} alt="" />
                <h1 className='max-w-[500px] text-[18px] md:text-[18px] lg:text-[20px]'>Algorithmic AI & Matching Text</h1>
                <div>
                    <p className='max-w-[550px] text-[16px] text-center pt-2'>Unleash creativity with AI algorithms and interactive UX/UI prototyping.</p>
                </div>
            </div>

            <div
                ref={cardThreeRef}
                className='cardthree  py-[50px] border border-[#670FFF] flex flex-col justify-center items-center px-5 rounded-[20px]'
                onMouseEnter={() => handleHover(cardThreeRef)}
                onMouseLeave={() => handleHoverOut(cardThreeRef)}
            >
                <img className='w-[122px] h-[118]' src={imgthree} alt="" />
                <h1 className='max-w-[500px] text-[18px] md:text-[18px] lg:text-[20px]'>Data & Quality Expertise Ethically</h1>
                <div>
                    <p className='max-w-[550px] text-[16px] text-center pt-2'>Protect and safeguard your data with cutting-edge security in scalable design systems.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
