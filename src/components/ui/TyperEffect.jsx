import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "../../utils/cn";

// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
// }) => {
//   // Split text inside of words into an array of characters
//   const wordsArray = words.map((word) => ({
//     ...word,
//     text: word.text.split(""),
//   }));

//   const animationControls = useAnimation();
//   const ref = useRef(null)
//   const  inView = useInView(ref);

//   useEffect(() => {
//     if (inView) {
//       animationControls.start({
//         opacity: 1,
//         width: "fit-content",
//         transition: {
//           duration: 0.3,
//           delay: 0.1,
//           ease: "easeInOut",
//         },
//       });
//     }
//   }, [inView]);

//   const renderWords = () => (
//     <motion.div ref={ref} className="inline">
//       {wordsArray.map((word, idx) => (
//         <div key={`word-${idx}`} className="inline-block">
//           {word.text.map((char, index) => (
//             <motion.span
//               key={`char-${index}`}
//               className={cn(
//                 `dark:text-white text-black opacity-0 hidden`,
//                 word.className
//               )}
//               initial={{}}
//             >
//               {char}
//             </motion.span>
//           ))}
//           &nbsp;
//         </div>
//       ))}
//     </motion.div>
//   );

//   return (
//     <div
//       className={cn(
//         "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
//         className
//       )}
//     >
//       {renderWords()}
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  // Split text inside of words into an array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block text-gray-800">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`text-gray-700 `, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-2", className)}>
      <motion.div
        className="overflow-hidden "
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xl sm:text-base md:text-xl lg:text:5xl xl:text-7xl font-semibold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-9 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
