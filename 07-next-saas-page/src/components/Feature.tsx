// "use client";
// import { MouseEvent, useEffect, useRef } from "react";
// import EchoSystemIcon from "../assets/icons/ecosystem.svg";

// export const Feature = ({
//   id,
//   title,
//   description,
// }: {
//   id: number;
//   title: string;
//   description: string;
// }) => {
//   const borderRef = useRef<HTMLElement>(null);
//   useEffect(() => {
//     if (!borderRef.current) return;
//     const updateMousePosition = (e: MouseEvent) => {
//       const borderRect = borderRef.current?.getBoundingClientRect();
//       const offsetX = e.x - borderRect?.x;
//       const offsetY = e.y - borderRect?.y;
//     };
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//     };
//   }, []);
//   return (
//     <li
//       key={id}
//       className="border border-white/30 px-5 py-10 text-center rounded-xl relative"
//     >
//       <div
//         className="absolute inset-0 border-2 border-purple-400 rounded-xl"
//         style={{
//           WebkitMaskImage:
//             "radial-gradient(100px 100px at 0px 0px, black, transparent)",
//           maskImage:
//             "radial-gradient(100px 100px at 0px 0px, black, transparent)",
//         }}
//         ref={borderRef}
//       ></div>
//       <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
//         <EchoSystemIcon />
//       </div>
//       <h3 className="mt-6 font-bold">{title}</h3>
//       <p className="mt-2 text-white/70">{description}</p>
//     </li>
//   );
// };

// "use client";
// import { useEffect, useRef } from "react";
// import EchoSystemIcon from "../assets/icons/ecosystem.svg";
// import { motion, useMotionTemplate, useMotionValue } from "motion/react";

// export const Feature = ({
//   id,
//   title,
//   description,
// }: {
//   id: number;
//   title: string;
//   description: string;
// }) => {
//   const offsetX = useMotionValue(0);
//   const offsetY = useMotionValue(0);
//   const maskImage = useMotionTemplate`radial-gradient(100px 100px at 50% 50%, black, transparent)`;
//   const borderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       if (!borderRef.current) return;

//       const borderRect = borderRef.current.getBoundingClientRect();
//       offsetX.set(e.clientX - borderRect.left);
//       offsetY.set(e.clientY - borderRect.top);

//       // ✅ Apply glow mask dynamically
//       borderRef.current.style.webkitMaskImage = maskImage;
//       borderRef.current.style.maskImage = maskImage;
//     };

//     window.addEventListener("mousemove", updateMousePosition);
//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return (
//     <li
//       key={id}
//       className="border border-white/30 px-5 py-10 text-center rounded-xl relative"
//     >
//       <motion.div>
//         <div
//           ref={borderRef}
//           className="absolute inset-0 border-2 border-purple-400 rounded-xl pointer-events-none"
//           style={{
//             WebkitMaskImage: maskImage,
//             maskImage: maskImage,
//           }}
//         ></div>
//       </motion.div>

//       <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
//         <EchoSystemIcon />
//       </div>
//       <h3 className="mt-6 font-bold">{title}</h3>
//       <p className="mt-2 text-white/70">{description}</p>
//     </li>
//   );
// };

"use client";
import { useEffect, useRef } from "react";
import EchoSystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  // ✅ Build mask gradient dynamically using motion template
  const maskImage = useMotionTemplate`radial-gradient(120px 120px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return;
      const rect = borderRef.current.getBoundingClientRect();

      offsetX.set(e.clientX - rect.left);
      offsetY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <li
      key={id}
      className="relative border border-white/30 px-5 py-10 text-center rounded-xl"
    >
      {/* ✅ This must be motion.div so Framer Motion can animate maskImage */}
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />

      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EchoSystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </li>
  );
};
