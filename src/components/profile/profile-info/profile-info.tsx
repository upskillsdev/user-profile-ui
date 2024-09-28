import { Avatar, Button, Link, Spacer } from '@nextui-org/react';
import { Link as LinkIcon, MapPin } from 'lucide-react';

import { ProfileInfoProps } from '../types';
import { getAvatarFallback } from '../utils';
import { InfoLine } from './info-line';
import { Paragraph, Subtle } from '../typography';

export const ProfileInfo = ({
  profile: { name, username, avatar, title, bio, location, website },
  company,
}: ProfileInfoProps) => {
  return (
    <section className="bg-content1 relative pb-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Avatar
            src={avatar}
            fallback={getAvatarFallback(name)}
            className="text-large ml-2 mt-[-40px] !size-20"
          />
          <Spacer y={1} />
          <div className="pl-4">
            <p className="text-lg font-bold">{name}</p>
            <Subtle>@{username}</Subtle>
            <Spacer y={2} />
            {title ? <span className="text-sm">{title}</span> : null}
            {company ? (
              <Link className="ml-1 text-xs" href={company.website} isExternal>
                @{company.name}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="p-2">
          <Button variant="bordered" size="sm">
            Edit profile
          </Button>
        </div>
      </div>
      {bio ? (
        <>
          <Spacer y={2} />
          <div className="px-4">
            <Paragraph className="text-sm">{bio}</Paragraph>
          </div>
        </>
      ) : null}
      <div>
        {location ? (
          <InfoLine className="mt-4" icon={<MapPin size={12} />}>
            {location}
          </InfoLine>
        ) : null}
        {website ? (
          <InfoLine icon={<LinkIcon size={12} />}>
            <Link className="text-sm" href={website} isExternal>
              {website}
            </Link>
          </InfoLine>
        ) : null}
      </div>
    </section>
  );
};
