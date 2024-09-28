import React from 'react';

import { PhotosProps } from '../../types';
import { PhotoCard } from './photo-card';

export const Photos = ({ photos }: PhotosProps) => {
  const columns = React.useMemo(() => {
    const cols = [];
    for (let i = 0; i < photos.length; i += 3) {
      cols.push(photos.slice(i, i + 3));
    }
    return cols;
  }, [photos]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {columns.map((columnPhotos, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {columnPhotos.map(({ id, src }, photoIndex) => (
            <PhotoCard key={photoIndex} photoId={id} photoSrc={src} />
          ))}
        </div>
      ))}
    </div>
  );
};
