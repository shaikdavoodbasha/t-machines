// import React, { useState } from 'react'
// import sliderone from "../assets/sliderone.png"
// import slidertwo from "../assets/slidertwo.png"
// import sliderthree from "../assets/sliderthree.png"
// import sliderfour from "../assets/sliderfour.png"


// const Tmachinetools = () => {
//     const [slider, setSlider] = useState('aimentor')

//     const data = [
//         {
//             image: sliderone,
//             _id: "aimentor",
//             title: "T-Machine Ai your personalized tutor",
//             paraone: "Ai-powered learning companions you personalized tutor adapts guides,and empowers your unique educational journey.",
//             paratwo: "Tailored guidance partner your personalized tutor,fueled by AI,supports and shapes your individual learning path."
//         },
//         {
//             image: slidertwo,
//             _id: "congnitivealorithm",
//             title: "T-Machine Ai Congnitive algorithm learning synergy",
//             paraone: "Tutor guided adaptation congnitive algorithms tailor content,guiding learners through dynamics,personalized educational journey.",
//             paratwo: "Ai-Indused customization congnitive algorithims adapt content fostering personalized learning pathways for enhaced comprehension."
//         },
//         {
//             image: sliderthree,
//             _id: "tailoredlearning",
//             title: "T-Machine Ai Tailored learning learning assistance",
//             paraone: "Dynamic learning pathways adaptive content delivery tailors educational journey ,ensuring personalized for effective learning.",
//             paratwo: "Personalized content navigation adaptive delivery customizes learning guiding individuals through tailored educational pathways."
//         }
//         , {
//             image: sliderfour,
//             _id: "predictivemodel",
//             title: "T-Machine Ai Driven predictive modeling",
//             paraone: "Anticipating Needs:AI driven predictive modeling foresees student requirements,optimizing personalized educaitonal experience.",
//             paratwo: "Strategic learning paths Ai predictive modeling tailors content guiding learners efficiently thorugh personalized progression."
//         }

//     ]

//     return (
//         <div className='w-full mt-[100px] h-[100vh]'>
//             <div className='flex justify-between items-center gap-2 cursor-pointer'>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("aimentor") }} className='text-[20px]'>Ai-Mentor</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block ' />
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("congnitivealorithm") }} className='text-[20px]'>Congnitive Algorithm</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block  ' />
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("tailoredlearning") }} className='text-[20px]'>Tailored Learning</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block' />
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("predictivemodel") }} className='text-[20px]'>Predictive Model</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block ' />
//                 </div>
//             </div>
//             {
//                 data.map((item, index) => {
//                     if (item._id == slider) {
//                         return (
//                             <div className='tools flex flex-col gap-3' key={index}>
//                                 <div className='py-[30px]'>
//                                     <h1 className='text-[24px] font-medium text-center'>{item.title}</h1>
//                                 </div>
//                                 <div className='flex justify-between items-center  px-36 '>
//                                     <img className='w-[360px] h-[400px] rounded-[20px]' src={item.image} alt="" />
//                                     <div className=' basis-[50%] flex flex-col gap-5'>
//                                         <p className='text-[18px]'>{item.paraone}</p>
//                                         <p className='text-[18px]'>{item.paratwo}</p>
//                                         <button className='px-[25px] py-[14px] border border-[#670fff] text-[18px] rounded-[5px] text-[#670fff]' >StartLearning</button>
//                                     </div>
//                                 </div>
//                             </div>

//                         )

//                     }

//                 })

//             }

//         </div>
//     )
// }

// export default Tmachinetools
// import React, { useState, useEffect, useRef } from 'react';
// import sliderone from "../assets/sliderone.png";
// import slidertwo from "../assets/slidertwo.png";
// import sliderthree from "../assets/sliderthree.png";
// import sliderfour from "../assets/sliderfour.png";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP's ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Tmachinetools = () => {
//     const [slider, setSlider] = useState('aimentor');
//     const toolsRef = useRef(null);
//     const titleRef = useRef(null);
//     const paragraphOneRef = useRef(null);
//     const paragraphTwoRef = useRef(null);
//     const imageRef = useRef(null);

//     const data = [
//         {
//             image: sliderone,
//             _id: "aimentor",
//             title: "T-Machine Ai your personalized tutor",
//             paraone: "Ai-powered learning companions you personalized tutor adapts guides,and empowers your unique educational journey.",
//             paratwo: "Tailored guidance partner your personalized tutor,fueled by AI,supports and shapes your individual learning path."
//         },
//         {
//             image: slidertwo,
//             _id: "congnitivealorithm",
//             title: "T-Machine Ai Congnitive algorithm learning synergy",
//             paraone: "Tutor guided adaptation congnitive algorithms tailor content,guiding learners through dynamics,personalized educational journey.",
//             paratwo: "Ai-Indused customization congnitive algorithims adapt content fostering personalized learning pathways for enhaced comprehension."
//         },
//         {
//             image: sliderthree,
//             _id: "tailoredlearning",
//             title: "T-Machine Ai Tailored learning learning assistance",
//             paraone: "Dynamic learning pathways adaptive content delivery tailors educational journey ,ensuring personalized for effective learning.",
//             paratwo: "Personalized content navigation adaptive delivery customizes learning guiding individuals through tailored educational pathways."
//         },
//         {
//             image: sliderfour,
//             _id: "predictivemodel",
//             title: "T-Machine Ai Driven predictive modeling",
//             paraone: "Anticipating Needs:AI driven predictive modeling foresees student requirements,optimizing personalized educaitonal experience.",
//             paratwo: "Strategic learning paths Ai predictive modeling tailors content guiding learners efficiently thorugh personalized progression."
//         }
//     ];

//     useEffect(() => {
//         // Timeline to animate all elements with ScrollTrigger
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: toolsRef.current, // The section to trigger on
//                 start: 'top 50%', // Start when the section top hits 50% of the viewport
//                 toggleActions: 'play none none none', // Play animation on scroll and don't reset or reverse
//             },
//         });

//         // Animate the title
//         tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' })
//             // Animate the first paragraph
//             .fromTo(paragraphOneRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
//             // Animate the second paragraph
//             .fromTo(paragraphTwoRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
//             // Animate the image
//             .fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5');

//     }, [slider]); // Re-run the animation when the slider changes

//     return (
//         <div className='main w-full mt-[100px] h-[100vh]' ref={toolsRef}>
//             {/* Tabs for selecting different sliders */}
//             <div className='flex justify-between items-center gap-2 cursor-pointer'>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("aimentor") }} className='text-[20px]'>Ai-Mentor</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block ' />
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("congnitivealorithm") }} className='text-[20px]'>Congnitive Algorithm</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block  ' />
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("tailoredlearning") }} className='text-[20px]'>Tailored Learning</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block' />
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("predictivemodel") }} className='text-[20px]'>Predictive Model</p>
//                     <hr className='w-2/4 border-none h-[2px] bg-[#670fff] hidden group-hover:block ' />
//                 </div>
//             </div>

//             {/* Slider Content */}
//             {
//                 data.map((item, index) => {
//                     if (item._id === slider) {
//                         return (
//                             <div className='tools flex flex-col gap-3' key={index}>
//                                 <div className='py-[30px]'>
//                                     <h1 className='text-[24px] font-medium text-center' ref={titleRef}>{item.title}</h1>
//                                 </div>
//                                 <div className='flex justify-between items-center  px-36'>
//                                     <img className='w-[360px] h-[400px] rounded-[20px]' src={item.image} alt="" ref={imageRef} />
//                                     <div className='basis-[50%] flex flex-col gap-5'>
//                                         <p className='text-[18px]' ref={paragraphOneRef}>{item.paraone}</p>
//                                         <p className='text-[18px]' ref={paragraphTwoRef}>{item.paratwo}</p>
//                                         <button className='px-[25px] py-[9px] border border-[#670fff] rounded-[10px] text-[#670fff] hover:bg-[#670fff]  hover:text-white text-[18px] transition duration-[1s]'>Start Learning</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     }
//                 })
//             }
//         </div>
//     );
// };

// export default Tmachinetools;
// import React, { useState, useEffect, useRef } from 'react';
// import sliderone from "../assets/sliderone.png";
// import slidertwo from "../assets/slidertwo.png";
// import sliderthree from "../assets/sliderthree.png";
// import sliderfour from "../assets/sliderfour.png";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP's ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Tmachinetools = () => {
//     const [slider, setSlider] = useState('aimentor');
//     const toolsRef = useRef(null);
//     const titleRef = useRef(null);
//     const paragraphOneRef = useRef(null);
//     const paragraphTwoRef = useRef(null);
//     const imageRef = useRef(null);
//     const buttonRef = useRef(null); // New ref for the button

//     const data = [
//         {
//             image: sliderone,
//             _id: "aimentor",
//             title: "T-Machine Ai your personalized tutor",
//             paraone: "Ai-powered learning companions you personalized tutor adapts guides,and empowers your unique educational journey.",
//             paratwo: "Tailored guidance partner your personalized tutor,fueled by AI,supports and shapes your individual learning path."
//         },
//         {
//             image: slidertwo,
//             _id: "congnitivealorithm",
//             title: "T-Machine Ai Congnitive algorithm learning synergy",
//             paraone: "Tutor guided adaptation congnitive algorithms tailor content,guiding learners through dynamics,personalized educational journey.",
//             paratwo: "Ai-Indused customization congnitive algorithims adapt content fostering personalized learning pathways for enhaced comprehension."
//         },
//         {
//             image: sliderthree,
//             _id: "tailoredlearning",
//             title: "T-Machine Ai Tailored learning learning assistance",
//             paraone: "Dynamic learning pathways adaptive content delivery tailors educational journey ,ensuring personalized for effective learning.",
//             paratwo: "Personalized content navigation adaptive delivery customizes learning guiding individuals through tailored educational pathways."
//         },
//         {
//             image: sliderfour,
//             _id: "predictivemodel",
//             title: "T-Machine Ai Driven predictive modeling",
//             paraone: "Anticipating Needs:AI driven predictive modeling foresees student requirements,optimizing personalized educaitonal experience.",
//             paratwo: "Strategic learning paths Ai predictive modeling tailors content guiding learners efficiently thorugh personalized progression."
//         }
//     ];

//     useEffect(() => {
       
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: toolsRef.current, 
//                 start: 'top 50%', 
//                 toggleActions: 'play none none none', // Play animation on scroll and don't reset or reverse
//             },
//         });

//         // Animate the title
//         tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' })
//             // Animate the first paragraph
//             .fromTo(paragraphOneRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
//             // Animate the second paragraph
//             .fromTo(paragraphTwoRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
//             // Animate the image
//             .fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
//             // Animate the button
//             .fromTo(buttonRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5');

//     }, [slider]); // Re-run the animation when the slider changes

//     return (
//         <div className='main w-full mt-[100px] h-[100vh] border pt-[40px] py-[30px] px-[30px] rounded-[10px] border-[#EDEDED]' ref={toolsRef}>
//             {/* Tabs for selecting different sliders */}
//             <div className='flex justify-between items-center gap-2 cursor-pointer'>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("aimentor") }} className='text-[20px] hover:text-[#670fff] font-medium'>Ai-Mentor</p>
//                     {/* <hr className='w-2/4 border-none h-[2px] bg-[#670fff]  ' /> */}
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("congnitivealorithm") }} className='text-[20px] hover:text-[#670fff] font-medium'>Congnitive Algorithm</p>
//                     {/* <hr className='w-2/4 border-none h-[2px] bg-[#670fff]  ' /> */}
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("tailoredlearning") }} className='text-[20px] hover:text-[#670fff] font-medium'>Tailored Learning</p>
//                     {/* <hr className='w-2/4 border-none h-[2px] bg-[#670fff] ' /> */}
//                 </div>
//                 <div className='flex flex-col items-center gap-1 group'>
//                     <p onClick={() => { setSlider("predictivemodel") }} className='text-[20px] hover:text-[#670fff] font-medium'>Predictive Model</p>
//                     {/* <hr className='w-2/4 border-none h-[2px] bg-[#670fff]  ' /> */}
//                 </div>
//             </div>

//             {/* Slider Content */}
//             {
//                 data.map((item, index) => {
//                     if (item._id === slider) {
//                         return (
//                             <div className='tools flex flex-col gap-3' key={index}>
//                                 <div className='py-[30px] flex flex-col justify-center  items-center gap-2'>
//                                     <h1 className='text-[20px]  text-center' ref={titleRef}>{item.title}</h1>
//                                     {/* <hr className='w-1/4 border-none h-[2px] text-center bg-[#670fff]  ' /> */}
//                                 </div>
//                                 <div className='flex justify-between items-center  px-36'>
//                                     <img className='w-[360px] h-[400px] rounded-[20px]' src={item.image} alt="" ref={imageRef} />
//                                     <div className='basis-[50%] flex flex-col gap-5'>
//                                         <p className='text-[18px]' ref={paragraphOneRef}>{item.paraone}</p>
//                                         <p className='text-[18px]' ref={paragraphTwoRef}>{item.paratwo}</p>
//                                         <button ref={buttonRef} className='px-[25px] py-[14px] border border-[#670fff] text-[18px] rounded-[5px] text-[#670fff] hover:bg-[#670fff] hover:text-white hover:duration-[1s] hover:ease-in-out hover:transiton'>Start Learning</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     }
//                 })
//             }
//         </div>
//     );
// };

// export default Tmachinetools;

import React, { useState, useEffect, useRef } from 'react';
import sliderone from "../assets/sliderone.png";
import slidertwo from "../assets/slidertwo.png";
import sliderthree from "../assets/sliderthree.png";
import sliderfour from "../assets/sliderfour.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Tmachinetools = () => {
    const [slider, setSlider] = useState('ai-mentor');
    const toolsRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphOneRef = useRef(null);
    const paragraphTwoRef = useRef(null);
    const imageRef = useRef(null);
    const buttonRef = useRef(null); // New ref for the button

    const data = [
        {
            image: sliderone,
            _id: "ai-mentor",
            title: "T-Machine Ai your personalized tutor",
            paraone: "Ai-powered learning companions you personalized tutor adapts guides,and empowers your unique educational journey.",
            paratwo: "Tailored guidance partner your personalized tutor,fueled by AI,supports and shapes your individual learning path."
        },
        {
            image: slidertwo,
            _id: "congnitivealorithm",
            title: "T-Machine Ai Congnitive algorithm learning synergy",
            paraone: "Tutor guided adaptation congnitive algorithms tailor content,guiding learners through dynamics,personalized educational journey.",
            paratwo: "Ai-Indused customization congnitive algorithims adapt content fostering personalized learning pathways for enhaced comprehension."
        },
        {
            image: sliderthree,
            _id: "tailoredlearning",
            title: "T-Machine Ai Tailored learning learning assistance",
            paraone: "Dynamic learning pathways adaptive content delivery tailors educational journey ,ensuring personalized for effective learning.",
            paratwo: "Personalized content navigation adaptive delivery customizes learning guiding individuals through tailored educational pathways."
        },
        {
            image: sliderfour,
            _id: "predictivemodel",
            title: "T-Machine Ai Driven predictive modeling",
            paraone: "Anticipating Needs:AI driven predictive modeling foresees student requirements,optimizing personalized educaitonal experience.",
            paratwo: "Strategic learning paths Ai predictive modeling tailors content guiding learners efficiently thorugh personalized progression."
        }
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: toolsRef.current, 
                start: 'top 50%', 
                // pin:false,
                toggleActions: 'play none none none', // Play animation on scroll and don't reset or reverse
            },
        });

        // Animate the title
        tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' })
            // Animate the first paragraph
            .fromTo(paragraphOneRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
            // Animate the second paragraph
            .fromTo(paragraphTwoRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
            // Animate the image
            .fromTo(imageRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
            // Animate the button
            .fromTo(buttonRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5');

    }, [slider]); // Re-run the animation when the slider changes

    return (
        <div className='main w-full mt-[100px] h-auto border pt-[40px] py-[30px] px-[30px] rounded-[10px] border-[#EDEDED]' ref={toolsRef}>
            {/* Tabs for selecting different sliders */}
            <div className='flex flex-wrap justify-center items-center gap-4 cursor-pointer'>
                {['Ai-Mentor','CongnitiveAlorithm','TailoredLearning','PredictiveModel'].map(item => (
                    <div  className='flex flex-col items-center gap-1 group'>
                        <p onClick={() => { setSlider(item) }} className='text-[22px]  hover:text-[#670fff] font-medium'>{item}</p>
                    </div>
                ))}
            </div>
           
            {/* Slider Content */}
            {
                data.map((item, index) => {
                    if (item._id === slider.toLocaleLowerCase()) {
                        return (
                            <div className='tools flex flex-col gap-3' key={index}>
                                <div className='py-[30px] flex flex-col justify-center items-center gap-2'>
                                    <h1 className='text-[18px]  sm:text-[24px] text-center' ref={titleRef}>{item.title}</h1>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center md:px-36'>
                                    <img className='w-full max-w-[360px] h-auto rounded-[20px] mb-4 md:mb-0' src={item.image} alt="" ref={imageRef} />
                                    <div className='basis-[50%] flex flex-col gap-5'>
                                        <p className='text-[16px] md:text-[18px]' ref={paragraphOneRef}>{item.paraone}</p>
                                        <p className='text-[16px] md:text-[18px]' ref={paragraphTwoRef}>{item.paratwo}</p>
                                        <button ref={buttonRef} className='px-[25px] py-[14px] border border-[#670fff] text-[16px] md:text-[18px] rounded-[5px] text-[#670fff] hover:bg-[#670fff] hover:text-white hover:duration-[1s] hover:ease-in-out hover:transiton'>Start Learning</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
    );
};

export default Tmachinetools;
