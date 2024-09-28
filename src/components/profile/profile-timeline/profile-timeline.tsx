import { Tab, Tabs } from '@nextui-org/react';

import { ProfileTimelineProps } from '../types';
import { useTimelineTabs } from './use-timeline-tabs';

export const ProfileTimeline = ({
  posts,
  photos,
  likedPosts,
}: ProfileTimelineProps) => {
  const tabs = useTimelineTabs({ likedPosts, photos, posts });

  return (
    <section className="flex w-full flex-col">
      <Tabs
        aria-label="Profile timeline"
        color="primary"
        fullWidth
        variant="underlined"
        items={tabs}
        destroyInactiveTabPanel={false}
        classNames={{
          base: 'sticky top-0 z-50 bg-background',
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <div className="px-2">{item.content}</div>
          </Tab>
        )}
      </Tabs>
    </section>
  );
};
