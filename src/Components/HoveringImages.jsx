import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import one from "../assets/hover1.png"
import two from "../assets/hover2.png"
import three from "../assets/hover3.png"
import four from "../assets/hover4.png"
import five from "../assets/hover5.png"
import six from "../assets/hover6.png"
import seven from "../assets/hover7.png"
import eight from "../assets/hover8.png"
import nine from "../assets/hover9.png"
import ten from "../assets/hover10.png"
import eleven from "../assets/hover11.png"
import twel from "../assets/hover12.png"
import thirteen from "../assets/hover13.png"
import fourteen from "../assets/hover14.png"
import fifteen from "../assets/hover15.png"
import sixteen from "../assets/hover16.png"



export const HoveringImages = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twel,
        thirteen,
        fourteen,
        fifteen,
        sixteen,
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-white border rounded-[10px] ">
        <p className="flex items-center gap-2 text-[60px]  font-semibold  text-[#670fff]">
          <FiMousePointer />
          <span>The World of Tech</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${imageIndex % 2
            ? `rotate(${rotation}deg)`
            : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${imageIndex % 2
            ? `rotate(-${rotation}deg)`
            : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};