import { cn, Spacer } from '@nextui-org/react';

import { InfoLineProps } from '../types';

export const InfoLine = ({ icon, className, children }: InfoLineProps) => {
  return (
    <div
      className={cn(
        'flex items-center px-4 [&:not(:first-child)]:mt-2',
        className
      )}
    >
      {icon}
      <Spacer x={1} />
      <div className="text-sm">{children}</div>
    </div>
  );
};
