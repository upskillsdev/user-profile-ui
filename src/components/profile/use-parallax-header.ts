import { MotionValue, useTransform } from 'framer-motion';

import { FEATURE_HEADER_HEIGHT } from './constants';

export const useParallaxHeader = (value: MotionValue<number>) => {
  return useTransform(value, [0, 1], [0, FEATURE_HEADER_HEIGHT]);
};
