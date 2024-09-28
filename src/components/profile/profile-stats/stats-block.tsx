import { StatsBlockProps } from '../types';

export const StatsBlock = ({ label, value }: StatsBlockProps) => {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className="w-20 truncate text-xl font-bold">{value}</p>
    </div>
  );
};
