// import React from 'react'
// import aboutimg from "../assets/aboutimg.png"

// const AboutUs = () => {
//     return (
//         <div className='aboutsection w-[87vw] h-[100vh] flex flex-col justify-center items-center gap-3 mt-[150px]'>
//             <h1 className='text-[55px] text-[#670fff] font-medium' >About Us</h1>
//             <p className='max-w-[1200px] text-[18px] text-center'>T-Machine Software Solutions is an integrated IT firm that offers a wide range of software solutions to companies of all sizes. Our passionate team of web architects excels in creating modern web applications that effectively showcase brands. With a collaborative culture and a talented roster, we are constantly exploring the latest trends in web design and development. Embracing the Fourth Industrial Revolution, we leverage advanced technologies such as AI, IoT, Big Data, Cloud computing, and Blockchain to develop cutting-edge web and mobile applications for our valued clients</p>
//             <img className='w-[1200px] h-[516px] rounded-[10px] mt-[50px]' src={aboutimg} alt="" />
//         </div>
//     )
// }

// export default AboutUs
import React, { useEffect, useRef } from 'react'
import aboutimg from "../assets/aboutimg.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
    // Create refs for the elements
    const aboutSectionRef = useRef(null)
    const titleRef = useRef(null)
    const paragraphRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        // Timeline to animate all elements with ScrollTrigger
        gsap.timeline({
            scrollTrigger: {
                trigger: aboutSectionRef.current, // The section to trigger on
                start: 'top 50%', // Start when the section top hits 50% of the viewport
                toggleActions: 'play none none none', // Play animation on scroll and don't reset or reverse
            },
        })
            .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 3, ease: 'power3.out' }) // Animate the title
            .fromTo(paragraphRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 3, ease: 'power3.out' }, '-=2.5') // Animate the paragraph
            .fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 3, ease: 'power3.out' }, '-=2.5') // Animate the image

    }, [])

    return (
        <div ref={aboutSectionRef} className='aboutsection w-[87vw] h-[80vh]  flex flex-col justify-center items-center gap-3  mt-[30px] md:mt-[80px] lg:mt-[250px]'>
            <h1 ref={titleRef} className=' text-[40px] md:text-[46px] lg:text-[55px] text-[#670fff] font-medium' >About Us</h1>
            <p ref={paragraphRef} className='max-w-[1200px] text-[15px] md:text-[16px]  lg:text-[18px] text-center'>
                T-Machine Software Solutions is an integrated IT firm that offers a wide range of software solutions to companies of all sizes.
                Our passionate team of web architects excels in creating modern web applications that effectively showcase brands.
                With a collaborative culture and a talented roster, we are constantly exploring the latest trends in web design and development.
                Embracing the Fourth Industrial Revolution, we leverage advanced technologies such as AI, IoT, Big Data, Cloud computing, and Blockchain
                to develop cutting-edge web and mobile applications for our valued clients.
            </p>
            <img ref={imageRef} className='lg:w-full lg:h-full rounded-[20px] mt-[50px]' src={aboutimg} alt="" />
        </div>
    )
}

export default AboutUs
