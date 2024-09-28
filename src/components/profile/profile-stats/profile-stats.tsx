import { ProfileStatsProps } from '../types';
import { formatNumber } from '../utils';
import { StatsBlock } from './stats-block';

export const ProfileStats = ({
  stats: { followers, following, posts },
}: ProfileStatsProps) => {
  return (
    <section className="bg-content1 flex justify-between p-4">
      <StatsBlock label="Followers" value={formatNumber(followers)} />
      <StatsBlock label="Following" value={formatNumber(following)} />
      <StatsBlock label="Posts" value={formatNumber(posts)} />
    </section>
  );
};
