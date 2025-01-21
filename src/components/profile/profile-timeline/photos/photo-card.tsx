import { Card, CardBody, Image } from "@heroui/react";

import { PhotoCardProps } from '../../types';

export const PhotoCard = ({ photoId, photoSrc, onPress }: PhotoCardProps) => {
  const handleOnPress = () => {
    return () => {
      onPress?.(photoId);
    };
  };

  return (
    <Card
      isPressable
      onPress={handleOnPress}
      className="p-0"
      classNames={{
        body: 'p-0',
      }}
    >
      <CardBody>
        <Image src={photoSrc} alt="" />
      </CardBody>
    </Card>
  );
};
