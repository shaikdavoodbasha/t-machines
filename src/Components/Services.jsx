// import React, { useEffect } from 'react'
// import imgone from "../assets/alltech.png"
// import imgtwo from "../assets/aiai.png"
// import imgthree from "../assets/bigbigdata.png"
// import imgfour from "../assets/iot.png"
// import imgfive from "../assets/blockchian.png"
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TextFlipping } from './TextFlipping'
// import gsap from 'gsap';

// gsap.registerPlugin(ScrollTrigger);


// const Services = () => {
//     useEffect(() => {
//         // Create GSAP animation with ScrollTrigger
//         const trigger = gsap.to(".divone", {
//             y: -300,
//             opacity: 1,
//             duration: 2,
//             stagger: 0.5,
//             scrollTrigger: {
//                 trigger: ".divone",
//                 // markers: true,
//                 top: "100%"

//             }
//         });
//         gsap.to("#service .sone", {
//             y: -100,
//             opacity: 1,
//             duration: 2,
//             stagger: 0.5,
//             scrollTrigger: {
//                 trigger: "#service",
//                 top: "100%"
//             }

//         })

//         // Cleanup ScrollTrigger instance on component unmount
//         return () => {
//             trigger.scrollTrigger.kill();  // Properly kill the ScrollTrigger instance
//         };
//     }, []);
//     return (
//         <div className='w-full lg:mt-[200px]  mt-[50px] '>
//             <div className='services flex justify-between'>
//                 <div id='service'>
//                     <h1 className='sone lg:text-[77px] text-[50px] text-[#670fff] '>Services</h1>
//                     <p className='sone text-[18px] max-w-[400px]  '>Elevate Your Digital Presence: Expert IR- 4.0 Technologies ,
//                         AI,Block chain and many more.</p>
//                 </div>
//                 <button className='sone px-[28px] h-[60px] py-[6px] rounded-[10px] bg-[#670fff]'><TextFlipping text={'Viewall'} color={'#ffffff'} /></button>
//             </div>
//             <div id='main' className=' mt-[300px] grid grid-cols-1 lg:grid-cols-2  gap-14  justify-center'>
//                 <div className='divone' >
//                     <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgone} alt="" />
//                     <h1 className='text-[28px] mt-[10px]'>IR-4.0 Technologies</h1>
//                     <p className='text-[18px] max-w-[600px] '>Leading IR-4.0 advancements. Smart tech automates industries, elevates communication, data handling. Innovating production's future through self-diagnosis, integrated machinery.</p>
//                     <div className='w-[550px] flex justify-between mt-[17px] mr-[20px] '>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>FrontEnd</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>BackEnd</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Database</button>
//                     </div>
//                 </div>
//                 <div className='divone lg:mt-[300px]'>
//                     <img className='h-[364px] rounded-[20px] mt-[5px] ' src={imgfive} alt="" />
//                     <h1 className='text-[28px] mt-[10px]'>Block chain Technologies</h1>
//                     <p className='text-[18px] max-w-[600px]  '>Exploring web 3.0 blockchain apps. Our solutions guarantee secure record handling, leveraging blockchain's credibility for diverse sector data management.</p>
//                     <div className=' w-[300px] flex justify-between mt-[17px] '>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Python</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Java</button>
//                     </div>
//                 </div>
//                 <div className='divone mt-[-300px]'>
//                     <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgtwo} alt="" />
//                     <h1 className='text-[28px] mt-[10px]'>Artificial Intelligence</h1>
//                     <p className='text-[18px] max-w-[600px]  '>Industry 4.0 mandates AI & ML-backed products. Non-adoption threatens survival. Our commitment: AI & ML integration across all offerings.</p>
//                     <div className='w-[550px] flex justify-between mt-[17px] mr-[20px] '>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Python</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>ML</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Database</button>
//                     </div>
//                 </div>
//                 <div className='divone'>
//                     <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgthree} alt="" />
//                     <h1 className='text-[28px] mt-[10px]'>Big Data</h1>
//                     <p className='text-[18px] max-w-[600px]  '>We deploy AI and big data in industries and the environment, delivering structured platforms for enhanced insights and offerings.</p>
//                     <div className=' w-[300px] flex justify-between mt-[17px] '>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Sql</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Mongodb</button>
//                     </div>
//                 </div>
//                 <div className='divone lg:mt-[-300px]'>
//                     <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgfour} alt="" />
//                     <h1 className='text-[28px] mt-[10px]'>Internet of things (IOT)</h1>
//                     <p className='text-[18px] max-w-[600px]  '>IoT: Street CCTV monitors congestion, emergencies. Our focus: Cloud-based AI solution development for advanced traffic management and safety.</p>
//                     <div className=' w-[300px] flex justify-between mt-[17px] '>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Python</button>
//                         <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Swift</button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Services
import React, { useEffect } from 'react'
import imgone from "../assets/alltech.png"
import imgtwo from "../assets/aiai.png"
import imgthree from "../assets/bigbigdata.png"
import imgfour from "../assets/iot.png"
import imgfive from "../assets/blockchian.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextFlipping } from './TextFlipping'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


const Services = () => {
    useEffect(() => {
        // Create GSAP animation with ScrollTrigger
        const trigger = gsap.to(".divone", {
            y: -300,
            opacity: 1,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".divone",
                // markers: true,
                top: "100%"

            }
        });
        gsap.to("#service .sone", {
            y: -100,
            opacity: 1,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#service",
                top: "100%"
            }

        })

        // Cleanup ScrollTrigger instance on component unmount
        return () => {
            trigger.scrollTrigger.kill();  // Properly kill the ScrollTrigger instance
        };
    }, []);
    return (
        <div className='w-full lg:mt-[200px]  mt-[150px] '>
            <div className='services flex justify-between'>
                <div id='service'>
                    <h1 className='sone lg:text-[77px] text-[50px] text-[#670fff] '>Services</h1>
                    <p className='sone text-[18px] max-w-[400px]  '>Elevate Your Digital Presence: Expert IR- 4.0 Technologies ,
                        AI,Block chain and many more.</p>
                </div>
                <button className='sone px-[28px] h-[60px] py-[6px] rounded-[10px] bg-[#670fff]'><TextFlipping text={'Viewall'} color={'#ffffff'} /></button>
            </div>
            <div id='main' className=' mt-[300px] grid grid-cols-1 lg:grid-cols-2  gap-14  justify-center'>
                <div className='divone' >
                    <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgone} alt="" />
                    <h1 className='text-[28px] mt-[10px]'>IR-4.0 Technologies</h1>
                    <p className='text-[18px] max-w-[600px] '>Leading IR-4.0 advancements. Smart tech automates industries, elevates communication, data handling. Innovating production's future through self-diagnosis, integrated machinery.</p>
                    <div className='w-[550px] flex justify-between mt-[17px] mr-[20px] '>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>FrontEnd</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>BackEnd</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Database</button>
                    </div>
                </div>
                <div className='divone lg:mt-[300px]'>
                    <img className='h-[364px] rounded-[20px] mt-[5px] ' src={imgfive} alt="" />
                    <h1 className='text-[28px] mt-[10px]'>Block chain Technologies</h1>
                    <p className='text-[18px] max-w-[600px]  '>Exploring web 3.0 blockchain apps. Our solutions guarantee secure record handling, leveraging blockchain's credibility for diverse sector data management.</p>
                    <div className=' w-[300px] flex justify-between mt-[17px] '>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Python</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Java</button>
                    </div>
                </div>
                <div className='divone lg:mt-[-300px]'>
                    <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgtwo} alt="" />
                    <h1 className='text-[28px]  lg:mt-[0px]'>Artificial Intelligence</h1>
                    <p className='text-[18px] max-w-[600px]  '>Industry 4.0 mandates AI & ML-backed products. Non-adoption threatens survival. Our commitment: AI & ML integration across all offerings.</p>
                    <div className='w-[550px] flex justify-between mt-[17px] mr-[20px] '>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Python</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>ML</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Database</button>
                    </div>
                </div>
                <div className='divone'>
                    <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgthree} alt="" />
                    <h1 className='text-[28px] mt-[10px]'>Big Data</h1>
                    <p className='text-[18px] max-w-[600px]  '>We deploy AI and big data in industries and the environment, delivering structured platforms for enhanced insights and offerings.</p>
                    <div className=' w-[300px] flex justify-between mt-[17px] '>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Sql</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Mongodb</button>
                    </div>
                </div>
                <div className='divone lg:mt-[-300px]'>
                    <img className=' h-[364px] rounded-[20px] mt-[5px] ' src={imgfour} alt="" />
                    <h1 className='text-[28px] mt-[10px]'>Internet of things (IOT)</h1>
                    <p className='text-[18px] max-w-[600px]  '>IoT: Street CCTV monitors congestion, emergencies. Our focus: Cloud-based AI solution development for advanced traffic management and safety.</p>
                    <div className=' w-[300px] flex justify-between mt-[17px] '>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Python</button>
                        <button className='bg-[#EDEDED] rounded-[30px] px-[20px] py-[8px]'>Swift</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services

