// import React, { useState } from 'react'
// import logoimg from "../assets/tmachinelogo.png"
// import { TextFlipping } from './TextFlipping'
// import { FiAlignJustify } from "react-icons/fi";

// const Navbar = () => {
//     const [menu, setMenu] = useState(false)
//     return (
//         <div className='flex  justify-between items-center py-5 relative'>
//             <img className='w-32  md:w-32 lg:w-52' src={logoimg} alt="" />
//             <div className='hidden md:block lg:block'>
//                 <div className='flex justify-between gap-6 md:gap-8 items-center'>
//                     <div>
//                         <TextFlipping text={'Home'} />
//                     </div>
//                     <div>
//                         <TextFlipping text={'Ourproducts'} />
//                     </div>
//                     <div>
//                         <TextFlipping text={'Career'} />
//                     </div>
//                     <div>
//                         <TextFlipping text={'Gallery'} />
//                     </div>
//                 </div>
//             </div>
//             <div className='hidden md:block lg:block'>
//                 <button className='px-[30px] py-[14px] bg-[#670FFF] text-[#ffffff] rounded-[50px]'>
//                     <TextFlipping text={'Contact'} />
//                 </button>
//             </div>
//             <div onClick={() => { setMenu(true) }} className='block md:hidden text-[#670FFF] text-[30px]'>
//                 < FiAlignJustify />
//             </div>
//             <div className={`${menu ? 'block' : 'hidden'}`}>
//                 <div className='absolute  top-5 left-0 w-full border flex flex-col gap-4 justify-center items-center bg-slate-50 py-8 transition-all ease-in opacity-100'>
//                     <p onClick={() => { setMenu(false) }} className='px-[20px] py-[15px] bg-[#670fff] text-white rounded-[50px]'>Back</p>
//                     <h1 onClick={() => { setMenu(false) }}>Home</h1>
//                     <h1 onClick={() => { setMenu(false) }}>Ourproducts</h1>
//                     <h1 onClick={() => { setMenu(false) }}>Careers</h1>
//                     <h1 onClick={() => { setMenu(false) }}>Gallery</h1>
//                     <h1 onClick={() => { setMenu(false) }}>Contact</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar
import React, { useState, useEffect, useRef } from 'react'
import logoimg from "../assets/tmachinelogo.png"
import { TextFlipping } from './TextFlipping'
import { FiAlignJustify } from "react-icons/fi";
import gsap from 'gsap';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const navbarRef = useRef(null)

    useEffect(() => {
        // GSAP animation for the navbar (from top to bottom with opacity change)
        gsap.fromTo(navbarRef.current, {
            y: -50,      // Start 50px above its original position
            opacity: 0,  // Start with opacity 0
        }, {
            y: 0,        // End at its original position
            opacity: 1,  // End with opacity 1 (fully visible)
            duration: 3, // 3 seconds duration
            ease: 'power3.out', // Smooth easing
        })
    }, [])

    return (
        <div ref={navbarRef} className='navbar flex justify-between items-center py-5 relative'>
            <img className='w-32  md:w-32 lg:w-52' src={logoimg} alt="" />
            <div className='hidden md:block lg:block'>
                <div className='flex justify-between gap-6 md:gap-8 items-center'>
                    <div>
                        <TextFlipping text={'Home'} />
                    </div>
                    <div>
                        <TextFlipping text={'Ourproducts'} />
                    </div>
                    <div>
                        <TextFlipping text={'Career'} />
                    </div>
                    <div>
                        <TextFlipping text={'Gallery'} />
                    </div>
                </div>
            </div>
            <div className='hidden md:block lg:block'>
                <button className=' px-[35px] py-[15px] bg-[#670FFF] text-[#ffffff] rounded-[50px]'>
                    <TextFlipping text={'Contact'} />
                </button>
            </div>
            <div onClick={() => { setMenu(true) }} className='block md:hidden text-[#670FFF] text-[30px]'>
                <FiAlignJustify />
            </div>
            <div className={`${menu ? 'block' : 'hidden'}`}>
                <div className='absolute top-5 left-0 w-full border flex flex-col gap-4 justify-center items-center bg-slate-50 py-8 transition-all ease-in opacity-100'>
                    <p onClick={() => { setMenu(false) }} className='px-[20px] py-[15px] bg-[#670fff] text-white rounded-[50px]'>Back</p>
                    <h1 onClick={() => { setMenu(false) }}>Home</h1>
                    <h1 onClick={() => { setMenu(false) }}>Ourproducts</h1>
                    <h1 onClick={() => { setMenu(false) }}>Careers</h1>
                    <h1 onClick={() => { setMenu(false) }}>Gallery</h1>
                    <h1 onClick={() => { setMenu(false) }}>Contact</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
