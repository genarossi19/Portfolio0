import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const AnimatedListItem = ({ children }) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.li>
  );
};

export default AnimatedListItem;
