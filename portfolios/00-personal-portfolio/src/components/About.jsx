import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <motion.div
      id="featured-text-info"
      className="text-gray-200 text-xl mt-5 mb-7 px-8 mmd:w-full mmd:p-0"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      ¡Hola!, soy{" "}
      <span className="text-purple-500">Genaro Rossi</span>, Desarrollador Junior
      Frontend y estudiante de{" "}
      <span className="text-purple-500">Ingeniería en Sistemas</span>. Mi
      enfoque se centra en la creación de experiencias web atractivas, y en
      constante búsqueda de soluciones innovadoras, aspiro a contribuir
      significativamente al campo del desarrollo.{" "}
      <span className="text-purple-500">Te invito a conocer más de mi</span>.
    </motion.div>
  );
};

export default About;
