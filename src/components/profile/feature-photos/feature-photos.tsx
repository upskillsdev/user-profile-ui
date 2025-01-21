import { cn, Image } from "@heroui/react";
import useEmblaCarousel from 'embla-carousel-react';

import { FEATURE_HEADER_HEIGHT } from '../constants';
import { FeaturePhotosProps } from '../types';
import { CarouselDotButton, useDotButton } from './carousel-dot-buttons';

export const FeaturePhotos = ({ photos, showDots }: FeaturePhotosProps) => {
  const [carouselRef, carouselApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(carouselApi);

  const handleDotButtonClick = (index: number) => {
    return () => {
      onDotButtonClick(index);
    };
  };

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {photos.map((index) => (
            <div className="min-w-0 shrink-0 grow-0 basis-full" key={index}>
              <Image
                src={index}
                alt="profile cover"
                className={`h-[${FEATURE_HEADER_HEIGHT}px] w-screen rounded-none object-cover`}
              />
            </div>
          ))}
        </div>
      </div>
      {showDots && (
        <div className="absolute bottom-2 flex w-full flex-wrap items-center justify-end pr-2">
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              onClick={handleDotButtonClick(index)}
              className={cn(
                'inline-flex cursor-pointer border-0 p-0 m-0 size-2 items-center justify-center rounded-[50%] ml-2 appearance-none bg-gray-300 opacity-50',
                {
                  'bg-gray-300 opacity-100': index === selectedIndex,
                }
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
};
