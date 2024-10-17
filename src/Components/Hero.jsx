
// import React, { Suspense, useRef } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
// import NewModel from './NewModel'
// import CanvasLoader from './CanvasLoader'

// const Hero = () => {
//     const ref = useRef()
//     return (
//         <div className='h-[80vh]  flex justify-between'>
//             <div className='leftsection flex flex-col justify-center h-[80vh]'>
//                 <div className='progress max-w-[200px] flex gap-3 justify-center items-center pr-[30px] py-[5px] bg-[#670fff] rounded-[50px] text-white '>
//                     <p className='px-[15px] py-[4px] bg-slate-50 text-[#000000] mr-2 rounded-[50px]'>Into</p>
//                     The future
//                 </div>
//                 <p className='max-w-[500px] font-semibold text-[40px]'>Empowering Tomorrow with AI-Driven Solutions
//                 </p>
//                 <p className='max-w-[400px] text-[18px] font-normal'>Industrial Revolution 4.0 web apps, by incorporating AI, optimize industries, enabling efficiency,connectivity, and competitiveness in the ever-evolving digital landscape.</p>
//                 <div className='flex gap-4 mt-4'>
//                     <button className='px-[35px] py-[9px] border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff]  hover:text-white text-[18px] transition duration-2 '>GetStarted</button>
//                     <button className='px-[35px] py-[9px] border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff]  hover:text-white text-[18px] transition duration-2 '>Learnmore</button>

//                 </div>
//             </div>
//             <div className='w-[50vw] h-[100vh] flex justify-center items-center  py-10'>
//                 <Canvas className='h-[60vh] '>
//                     <Suspense fallback={<CanvasLoader />}>
//                         {/* Perspective Camera */}
//                         <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//                         {/* OrbitControls with autoRotate enabled */}
//                         <OrbitControls
//                             enableZoom={true}
//                             enablePan={false} // Disable manual panning to avoid interruptions
//                             enableRotate={true}
//                             autoRotate={true} // Enables automatic rotation
//                             autoRotateSpeed={1.5} // Control the speed of automatic rotation
//                         />

//                         {/* 3D Model */}
//                         <NewModel scale={7} position={[0, 0, 0]} rotation={[0, 280, 0]} />

//                         {/* Lighting */}
//                         <ambientLight intensity={1} />
//                         <directionalLight position={[10, 10, 10]} intensity={0.5} />
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     )
// }

// export default Hero
// import React, { Suspense, useRef, useEffect } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
// import NewModel from './NewModel'
// import CanvasLoader from './CanvasLoader'
// import gsap from 'gsap'

// const Hero = () => {
//     const ref = useRef()
//     const leftSectionRef = useRef(null)

//     useEffect(() => {
//         // Select all child elements inside the left section
//         const leftSectionElements = leftSectionRef.current.children

//         // GSAP timeline for staggered animation
//         gsap.timeline()
//             .fromTo(leftSectionElements, {
//                 y: 50,   // Start position (50px below)
//                 opacity: 0, // Start with opacity 0
//             }, {
//                 y: 0,   // End position (original position)
//                 opacity: 1, // End with opacity 100
//                 duration: 3, // Duration of each animation
//                 stagger: 0.3, // Time between the start of each element's animation
//                 ease: 'power3.out', // Easing function
//             })
//     }, [])

//     return (
//         <div className='h-[80vh]  flex justify-between'>
//             <div ref={leftSectionRef} className='leftsection flex flex-col gap-1 justify-center h-[80vh]'>
//                 <div className='progress max-w-[200px] flex gap-3 text-[16px] justify-center items-center pr-[35px] py-[5px] bg-[#670fff] rounded-[50px] text-white '>
//                     <p className='px-[15px] text-[16px] py-[4px] bg-slate-50 text-[#000000] mr-2 rounded-[50px]'>Into</p>
//                     The future
//                 </div>
//                 <p className='max-w-[500px] font-semibold text-[30px] lg:text-[35px]'>
//                     Empowering Tomorrow with AI Driven Solutions
//                 </p>
//                 <p className='max-w-[400px] lg:text-[18px] font-normal'>
//                     Industrial Revolution 4.0 web apps, by incorporating AI, optimize industries, enabling efficiency, connectivity, and competitiveness in the ever-evolving digital landscape.
//                 </p>
//                 <div className='flex gap-4 mt-4'>
//                     <button className='px-[35px] py-[9px] border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff]  hover:text-white text-[18px] transition duration-[1s]'>
//                         Get Started
//                     </button>
//                     <button className='px-[35px] py-[9px] border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff]  hover:text-white text-[18px] transition duration-[1s] '>
//                         Learn More
//                     </button>
//                 </div>
//             </div>
//             <div className='w-[50vw] h-[80vh] flex justify-center items-center py-10'>
//                 <Canvas className='h-[60vh] '>
//                     <Suspense fallback={<CanvasLoader />}>
//                         {/* Perspective Camera */}
//                         <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//                         {/* OrbitControls with autoRotate enabled */}
//                         <OrbitControls
//                             enableZoom={true}
//                             enablePan={false} // Disable manual panning to avoid interruptions
//                             enableRotate={true}
//                             autoRotate={true} // Enables automatic rotation
//                             autoRotateSpeed={1.5} // Control the speed of automatic rotation
//                         />

//                         {/* 3D Model */}
//                         <NewModel scale={8} position={[0, -6, 0]} rotation={[0, 280, 0]} />

//                         {/* Lighting */}
//                         <ambientLight intensity={1} />
//                         <directionalLight position={[10, 10, 10]} intensity={0.5} />
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     )
// }

// export default Hero
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import NewModel from './NewModel';
import CanvasLoader from './CanvasLoader';
import gsap from 'gsap';

const Hero = () => {
    const leftSectionRef = useRef(null);

    useEffect(() => {
        // Select all child elements inside the left section
        const leftSectionElements = leftSectionRef.current.children;

        // GSAP timeline for staggered animation
        gsap.timeline()
            .fromTo(leftSectionElements, {
                y: 50,   // Start position (50px below)
                opacity: 0, // Start with opacity 0
            }, {
                y: 0,   // End position (original position)
                opacity: 1, // End with opacity 100
                duration: 3, // Duration of each animation
                stagger: 0.3, // Time between the start of each element's animation
                ease: 'power3.out', // Easing function
            });
    }, []);

    return (
        <div className='flex flex-col lg:flex-row lg:justify-between h-[80vh] border border-[#ededed]'>
            <div ref={leftSectionRef} className='flex flex-col justify-center gap-1 h-full lg:w-1/2 px-4 lg:px-8'>
                <div className='progress max-w-[200px] flex  justify-evenly  px-[10px] items-center py-2 bg-[#670fff] rounded-[50px] text-white'>
                    <div className='w-full  flex justify-normal items-center gap-2'>
                        <p className='px-[22px] text-[16px] py-1 bg-slate-50 text-[#000000]  rounded-[50px]'>Into</p>
                        <p className='text-[16px]'>The future</p>
                    </div>
                </div>
                <p className='max-w-[500px] font-semibold text-[30px] lg:text-[40px]'>
                    Empowering Tomorrow with AI-Driven Solutions
                </p>
                <p className='max-w-[400px] lg:text-[18px] font-normal'>
                    Industrial Revolution 4.0 web apps, by incorporating AI, optimize industries, enabling efficiency, connectivity, and competitiveness in the ever-evolving digital landscape.
                </p>
                <div className='flex gap-4 mt-4'>
                    <button className='px-8 py-2 border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff] hover:text-white text-[16px] transition duration-300'>
                        Get Started
                    </button>
                    <button className='px-8 py-2 border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff] hover:text-white text-[16px] transition duration-300'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center lg:w-1/2 w-full h-full py-10'>
                <Canvas className='h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Perspective Camera */}
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        {/* OrbitControls with autoRotate enabled */}
                        <OrbitControls
                            enableZoom={true}
                            enablePan={false} // Disable manual panning to avoid interruptions
                            enableRotate={true}
                            autoRotate={true} // Enables automatic rotation
                            autoRotateSpeed={1.5} // Control the speed of automatic rotation
                        />
                        {/* 3D Model */}
                        <NewModel scale={8} position={[0, -6, 0]} rotation={[0, 280, 0]} />
                        {/* Lighting */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default Hero;

