import React from 'react';

import { ProfileTimelineProps } from '../types';
import { Photos } from './photos';
import { Posts } from './posts';

export const useTimelineTabs = ({
  likedPosts,
  photos,
  posts,
}: ProfileTimelineProps) => {
  const tabs = React.useMemo(() => {
    return [
      {
        id: 'posts',
        label: 'Posts',
        content: <Posts posts={posts} />,
      },
      {
        id: 'photos',
        label: 'Photos',
        content: <Photos photos={photos} />,
      },
      {
        id: 'likes',
        label: 'Likes',
        content: <Posts posts={likedPosts} />,
      },
    ];
  }, [likedPosts, photos, posts]);

  return tabs;
};
