import React from 'react';
import { ScrollShadow, Spacer } from '@nextui-org/react';
import { useScroll } from 'framer-motion';

import { FeaturePhotos } from './feature-photos';
import { ParallaxContainer } from './parallax-container';
import { ProfileInfo } from './profile-info';
import { ProfileStats } from './profile-stats';
import { ProfileTimeline } from './profile-timeline';
import { ProfilePageProps } from './types';
import { useParallaxHeader } from './use-parallax-header';

export const ProfilePage = ({
  featurePhotos,
  profile,
  company,
  profileStats,
  profileTimeline: { posts, photos, likedPosts },
}: ProfilePageProps) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const y = useParallaxHeader(scrollYProgress);

  return (
    <ScrollShadow ref={ref} className="h-[550px] max-w-xs mx-auto" size={15}>
      <ParallaxContainer y={y}>
        <FeaturePhotos photos={featurePhotos} showDots />
      </ParallaxContainer>
      <ProfileInfo profile={profile} company={company} />
      <Spacer y={1} />
      <ProfileStats stats={profileStats} />
      <Spacer y={1} />
      <ProfileTimeline posts={posts} photos={photos} likedPosts={likedPosts} />
    </ScrollShadow>
  );
};
