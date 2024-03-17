import "/src/index.css";
import Navbar from "./components/Navbar 01/Navbar";
import { useEffect } from "react";
import phoneme from "./assets/phoneme.png";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ProgressBar from "./components/ProgressBar";
import About from "./components/About";

function App() {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, staggerChildren: 0.1 },
    },
  };

  // const textVariants2 = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { delay: 0.1, staggerChildren: 0.025 },
  //   },
  // };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.2, rotate: -1080 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const title = "Genaro Rossi";

  return (
    // Pantalla principal => le saque el min-h-screen
    <div id="container" className="bg-backgray  overflow-x-hidden w-full">
      <ProgressBar />
      {/* HEADER */}
      <Navbar />
      {/* MAIN */}
      <main id="wrapper" className="ps-[10vh] pe-[10vh]">
        {/* FEATURED BOX */}
        <section
          id="featured-box"
          className="relative flex h-screen min-h-[500px]"
        >
          {/* div Imagen */}
          {/* h-screen  p-8  lg:col-span-4 hidden sm:flex sm:flex-wrap */}
          <div
            id="featured-image"
            className=" flex justify-left content-center h-[100vh] min-w-[25%] p-4"
          >
            {/* Imagen */}
            <div
              id="image"
              className="m-auto object-contain justify-center items-center"
            >
              <motion.img
                id="phoneimage"
                src={phoneme}
                alt="phone"
                initial={{ opacity: 0, y: 50 }} // Posición inicial en la parte inferior
                animate={{ opacity: 1, y: 0 }} // Posición final en el centro
                transition={{ duration: 1 }}
                className=" sm:h-full w-full phoneimage m-auto"
              />
            </div>
          </div>
          {/* div Texto */}
          {/* text-wrap flex flex-col justify-between h-full */}
          <div
            id="featured-text"
            className="relative flex justify-center min-h-[80vh] flex-col min-w-[75%] ps-5"
          >
            {/* Texto */}
            <div
              id="featured-name"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold m-5  "
            >
              {/* text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-purple-500 font-poppins font-bold textshadow text-wrap mt-8 p-4 */}
              <motion.h1
                className="capitalize text-purple-500 textshadow;"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {title.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* text-info */}
            <div id="featured-text-info">
              <About />
            </div>
            <div id="social-icons" className=" w-auto  pe-32 ps-8 ">
          {/* Redes sociales */}
          <motion.ul
            className="flex items-baseline justify-start gap-16 2xl:gap-12 mt-[2em] "
            initial="hidden"
            animate={controls}
            variants={listVariants}
          >
            {/* GitHub */}
            <motion.li variants={itemVariants}>
              <a
                href="https://github.com/genarossi19/"
                target="_blank"
                // p-2 lg:p-4 2xl:p-10 block border border-gray-300/30 rounded-full text-2xl  lg:text-4xl 2xl:text-6xl hover:border-white group transition-colors ease-in-out
                className="flex justify-center items-center w-[100px] h-[100px]  text-4xl border border-gray-300/30 rounded-full  hover:border-white group transition-colors ease-in-out "
              >
                <FaGithub className="text-gray-300/60 group-hover:text-white transition-colors ease-in-out" />
              </a>
            </motion.li>
            {/* Instagram */}
            <motion.li variants={itemVariants}>
              <a
                href="https://www.instagram.com/gena_rossi"
                target="_blank"
                className="flex justify-center items-center w-[100px] h-[100px]  text-4xl border border-gray-300/30 rounded-full   hover:border-[#D62976] group transition-colors ease-in-out"
              >
                <FaInstagram className="text-gray-300/60 group-hover:text-[#D62976] transition-colors ease-in-out" />
              </a>
            </motion.li>
            {/* Whatsapp */}
            <motion.li variants={itemVariants}>
              <a
                href="https://wa.link/gir1va"
                target="_blank"
                className="flex justify-center items-center w-[100px] h-[100px]  text-4xl border border-gray-300/30 rounded-full  hover:border-[#0D9C35] group transition-colors ease-in-out"
              >
                <FaWhatsapp className="text-gray-300/60 group-hover:text-[#0D9C35] transition-colors ease-in-out" />
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                href="https://github.com/genarossi19/"
                target="_blank"
                className="flex justify-center items-center w-[100px] h-[100px]  text-4xl border border-gray-300/30 rounded-full  hover:border-[#1863BD] group transition-colors ease-in-out"
              >
                <FaLinkedin className="text-gray-300/60 group-hover:text-[#1863BD] transition-colors ease-in-out" />
              </a>
            </motion.li>
          </motion.ul>
        </div>
          </div>
        </section>

        
        <hr className="border border-purple-600 opacity-20 " />
      </main>
    </div>
  );
}

export default App;
