// import React from 'react'
// import icon from "../assets/arrows.png"
// import team1 from "../assets/team1.png"
// import team2 from "../assets/team2.png"
// import team3 from "../assets/team3.png"
// import team4 from "../assets/team4.png"
// import team5 from "../assets/team5.png"
// import team6 from "../assets/team6.png"

// const TeamMembers = () => {
//     return (
//         <div className='w-full flex justify-between items-center'>
//             <div className='leftsection flex flex-col justify-center gap-6 basis-[50%]'>
//                 <h1 className='lg:text-[20px] text-[#670fff]'>Our Creative team</h1>
//                 <h2 className='lg:text-[30px] font-medium'>Meet members of our creative team</h2>
//                 <p className='lg:text-[18px]'>We work to create the most attractive & meaningful place for small businesses. Our Team always ready to help you.</p>
//                 <div className='flex flex-col justify-center'>
//                     <div className='flex gap-2 items-center'>
//                         <img className='w-[48px] h-[36px]' src={icon} alt="" />
//                         <p className='lg:text-[18px]'>A team consisting of skilled members</p>
//                     </div>
//                     <div className='flex gap-2 items-center'>
//                         <img className='w-[48px] h-[36px]' src={icon} alt="" />
//                         <p className='lg:text-[18px]'>Ready to help you 24/7 support</p>
//                     </div>
//                 </div>
//                 <button className=' lg:px-[36px] lg:py-[13px] border border-[#670fff] text-[#670fff] rounded-[10px] hover:bg-[#670fff]  hover:text-white lg:text-[18px] transition duration-[1s]'>See more team members</button>
//             </div>
//             <div className='rightsection right section basis-[50%] py-[30px] grid lg:grid-cols-3'>
//                 <div className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
//                     <img className='w-[126px] h-[133px] rounded-full' src={team1} alt="" />
//                     <div className='flex flex-col justify-center items-center gap-1'>
//                         <p className='lg:text-[17px]'>Name</p>
//                         <p className='lg:text-[17px]'>Profession</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
//                     <img className='w-[126px] h-[133px] rounded-full' src={team2} alt="" />
//                     <div className='flex flex-col justify-center items-center gap-1'>
//                         <p className='lg:text-[17px]'>Name</p>
//                         <p className='lg:text-[17px]'>Profession</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
//                     <img className='w-[126px] h-[133px] rounded-full' src={team3} alt="" />
//                     <div className='flex flex-col justify-center items-center gap-1'>
//                         <p className='lg:text-[17px]'>Name</p>
//                         <p className='lg:text-[17px]'>Profession</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
//                     <img className='w-[126px] h-[133px] rounded-full' src={team4} alt="" />
//                     <div className='flex flex-col justify-center items-center gap-1'>
//                         <p className='lg:text-[17px]'>Name</p>
//                         <p className='lg:text-[17px]'>Profession</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
//                     <img className='w-[126px] h-[133px] rounded-full' src={team5} alt="" />
//                     <div className='flex flex-col justify-center items-center gap-1'>
//                         <p className='lg:text-[17px]'>Name</p>
//                         <p className='lg:text-[17px]'>Profession</p>
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
//                     <img className='w-[126px] h-[133px] rounded-full' src={team6} alt="" />
//                     <div className='flex flex-col justify-center items-center gap-1'>
//                         <p className='lg:text-[17px]'>Name</p>
//                         <p className='lg:text-[17px]'>Profession</p>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default TeamMembers
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import icon from "../assets/arrows.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

gsap.registerPlugin(ScrollTrigger);

const TeamMembers = () => {
    // Refs for animations
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        // Left section animation
        gsap.fromTo(leftSectionRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: leftSectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });

        // Right section animation
        gsap.fromTo(rightSectionRef.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: rightSectionRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none',
                }
            });
    }, []);

    return (
        <div className='w-full flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10'>
            {/* Left Section */}
            <div
                ref={leftSectionRef}
                className='leftsection flex flex-col justify-center gap-6 basis-[100%] lg:basis-[50%] mb-10 lg:mb-0'>
                <h1 className='text-[16px] lg:text-[20px] text-[#670fff]'>Our Creative Team</h1>
                <h2 className='text-[24px] lg:text-[30px] font-medium'>Meet members of our creative team</h2>
                <p className='text-[16px] lg:text-[18px]'>We work to create the most attractive & meaningful place for small businesses. Our team is always ready to help you.</p>

                <div className='flex flex-col justify-center gap-3'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[36px] h-[26px] lg:w-[48px] lg:h-[36px]' src={icon} alt="" />
                        <p className='text-[16px] lg:text-[18px]'>A team consisting of skilled members</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[36px] h-[26px] lg:w-[48px] lg:h-[36px]' src={icon} alt="" />
                        <p className='text-[16px] lg:text-[18px]'>Ready to help you 24/7 support</p>
                    </div>
                </div>

                <button className='px-[20px] py-[10px] lg:px-[36px] lg:py-[13px] border border-[#670fff] text-[#670fff] rounded-[10px] hover:bg-[#670fff] hover:text-white text-[16px] lg:text-[18px] transition duration-[0.5s]'>See more team members</button>
            </div>

            {/* Right Section */}
            <div
                ref={rightSectionRef}
                className='rightsection grid grid-cols-2 sm:grid-cols-3 gap-5 basis-[100%] lg:basis-[50%] py-[30px]'>

                {[team1, team2, team3, team4, team5, team6].map((teamImage, index) => (
                    <div key={index} className='flex flex-col justify-center items-center px-[15px] py-[20px]'>
                        <img className='w-[90px] h-[90px] sm:w-[126px] sm:h-[133px] rounded-full' src={teamImage} alt={`team-${index + 1}`} />
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <p className='text-[15px] sm:text-[17px]'>Name</p>
                            <p className='text-[15px] sm:text-[17px]'>Position</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TeamMembers;
