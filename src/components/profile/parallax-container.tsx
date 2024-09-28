import { ComponentWithChildren } from '@upskill-app/types';
import { motion, MotionValue } from 'framer-motion';

type ParallaxContainerProps = {
  y: MotionValue<number>;
} & ComponentWithChildren;

export const ParallaxContainer = ({ children, y }: ParallaxContainerProps) => {
  return (
    <motion.div
      style={{
        y,
      }}
    >
      {children}
    </motion.div>
  );
};
