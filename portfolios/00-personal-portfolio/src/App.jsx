import "/src/index.css";
import Navbar from "./components/Navbar 01/Navbar";
import phoneme from "./assets/phoneme.png";
import { motion } from "framer-motion";

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

  const title = "Genaro Rossi";
  const description = "Desarrollador Junior frontend y estudiante de Ingeniería en Sistemas."

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
              className="text-white text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
