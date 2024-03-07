import "/src/index.css";
import Navbar from "./components/Navbar 01/Navbar";
import { useEffect } from "react";
import phoneme from "./assets/phoneme.png";
import { motion , useAnimation} from "framer-motion";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function App() {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, staggerChildren: 0.1 },
    },
  };

  const textVariants2 = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.1, staggerChildren: 0.025 },
    },
  };

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
  const description =
    "Desarrollador Junior frontend y estudiante de Ingeniería en Sistemas.";

  return (
    // Pantalla principal
    <div id="screen" className="bg-backgray min-h-screen  ">
      <Navbar />
      {/* div pagina */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 min-h-screen ">
        {/* div Imagen */}
        <div id="phone" className=" relative h-screen  p-8 ms-2 lg:col-span-4 ">
          {/* Imagen */}
          <motion.img
            id="phoneimage"
            src={phoneme}
            alt="phone"
            initial={{ opacity: 0, y: 50 }} // Posición inicial en la parte inferior
            animate={{ opacity: 1, y: 0 }} // Posición final en el centro
            transition={{ duration: 1 }}
            className="h-1/2 sm:h-full object-cover  phoneimage "
          />
        </div>
        {/* div content */}
        <div id="content" className="col-span-8">
          {/* div Texto */}
          <div id="text" className="inline-block">
            {/* Texto */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-purple-500 font-poppins font-bold textshadow text-center m-8 lg:ms-8"
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
            <motion.p
              className="text-white text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-16"
              variants={textVariants2}
              initial="hidden"
              animate="visible"
            >
              {description.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            {/* Redes sociales */}
            <motion.ul
              className="flex items-center gap-8 justify-center mt-20"
              initial="hidden"
              animate={controls}
              variants={listVariants}
            >
              {/* GitHub */}
              <motion.li variants={itemVariants}>
                <a
                  href="https://github.com/genarossi19/"
                  target="_blank"
                  className="p-8 lg:p-4 xl:p-8 block border border-gray-300/30 rounded-full text-4xl  lg:text-2xl xl:text-4xl hover:border-white group transition-colors ease-in-out"
                >
                  <FaGithub className="text-gray-300/60 group-hover:text-white transition-colors ease-in-out" />
                </a>
              </motion.li>
              {/* Instagram */}
              <motion.li variants={itemVariants}>
                <a
                  href="https://www.instagram.com/gena_rossi"
                  target="_blank"
                  className="p-8 lg:p-4 xl:p-8 block border border-gray-300/30 rounded-full text-4xl  lg:text-2xl xl:text-4xl  hover:border-[#D62976] group transition-colors ease-in-out"
                >
                  <FaInstagram className="text-gray-300/60 group-hover:text-[#D62976] transition-colors ease-in-out" />
                </a>
              </motion.li>
              {/* Whatsapp */}
              <motion.li variants={itemVariants}>
                <a
                  href="https://wa.link/gir1va"
                  target="_blank"
                  className="p-8 lg:p-4 xl:p-8 block border border-gray-300/30 rounded-full text-4xl  lg:text-2xl xl:text-4xl hover:border-[#0D9C35] group transition-colors ease-in-out"
                >
                  <FaWhatsapp className="text-gray-300/60 group-hover:text-[#0D9C35] transition-colors ease-in-out" />
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  href="https://github.com/genarossi19/"
                  target="_blank"
                  className="p-8 lg:p-4 xl:p-8 block border border-gray-300/30 rounded-full text-4xl  lg:text-2xl xl:text-4xl hover:border-[#1863BD] group transition-colors ease-in-out"
                >
                  <FaLinkedin className="text-gray-300/60 group-hover:text-[#1863BD] transition-colors ease-in-out" />
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
