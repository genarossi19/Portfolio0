/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const AnimatedLink = ({ href, borderColor, icon }) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 0.1 }}
    >
      <a
        href={href}
        target="_blank"
        className={`p-8 lg:p-4 xl:p-8 block border border-gray-300/30 rounded-full text-4xl lg:text-2xl xl:text-4xl hover:border-${borderColor} group transition-colors ease-in-out`}
      >
        {icon}
      </a>
    </motion.li>
  );
};

export { AnimatedLink, FaGithub, FaInstagram, FaWhatsapp, FaLinkedin };
