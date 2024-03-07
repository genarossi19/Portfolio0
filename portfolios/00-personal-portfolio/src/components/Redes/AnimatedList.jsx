import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const AnimatedList = ({ children }) => {
  return (
    <motion.ul
      className="flex items-center gap-8 justify-center mt-16"
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};

export default AnimatedList;
