import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  User,
} from '@nextui-org/react';
import { Ellipsis } from 'lucide-react';

import { PostActionType, PostCardProps, PostMenuActionType } from '../../types';
import { formatDate, getAvatarFallback } from '../../utils';
import {
  getPostActionCount,
  getPostActions,
  getPostMenuActions,
} from './post-card.utils';
import { Subtle } from '../../typography';
import { MarkdownRenderer } from '../../markdown-renderer';

export const PostCard = ({
  postId,
  createdAt,
  content,
  authorName,
  authorUsername,
  avatar,
  isSelfPost,
  postActionConfig,
  postMenuActionConfig,
  className,
  ...rest
}: PostCardProps) => {
  const postActions = getPostActions();
  const postMenuActions = getPostMenuActions({
    isSelfPost,
  });

  const handleOnMenuDropdownAction = (type: PostMenuActionType) => {
    return () => postMenuActionConfig?.[type](postId);
  };

  const handleOnPostAction = (type: PostActionType) => {
    return () => postActionConfig?.[type].handler(postId);
  };

  return (
    <Card isPressable className={cn('mb-4 last:mb-0', className)} {...rest}>
      <CardHeader className="justify-between">
        <div className="flex gap-1">
          <User
            name={authorName}
            description={
              <Link href="#" size="sm" isExternal>
                {`@${authorUsername}`}
              </Link>
            }
            avatarProps={{
              src: avatar,
              fallback: getAvatarFallback(authorName),
            }}
          />
          <Subtle className="mt-1 text-xs">· {formatDate(createdAt)}</Subtle>
        </div>
        {postMenuActionConfig ? (
          <Dropdown
            placement="bottom-end"
            classNames={{
              content: 'bg-content2',
            }}
          >
            <DropdownTrigger>
              <Button size="sm" variant="light" isIconOnly>
                <Ellipsis size={14} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {postMenuActions.map(({ title, icon, type }) => (
                <DropdownItem
                  key={type}
                  aria-label={title}
                  color={type === 'delete' ? 'danger' : 'default'}
                  endContent={icon}
                  onClick={handleOnMenuDropdownAction(type)}
                >
                  {title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ) : null}
      </CardHeader>
      <CardBody className="text-sm">
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </CardBody>
      {postActionConfig ? (
        <CardFooter className="flex justify-around">
          {postActions.map(({ icon, type }) => {
            const content = getPostActionCount(type, postActionConfig);
            return (
              <Button
                key={type}
                size="sm"
                variant="light"
                startContent={icon}
                isIconOnly={content === null}
                onClick={handleOnPostAction(type)}
              >
                {content}
              </Button>
            );
          })}
        </CardFooter>
      ) : null}
    </Card>
  );
};
