import {
  Bookmark,
  Flag,
  Heart,
  HeartOff,
  MessageCircle,
  Repeat2,
  Share,
  SquarePen,
  Star,
  Trash,
} from 'lucide-react';

import {
  PostAction,
  PostActionConfig,
  PostActionType,
  PostMenuAction,
} from '../../types';

const defaultIconSize = 14;

const postActions: PostAction[] = [
  {
    type: 'comment',
    icon: <MessageCircle size={defaultIconSize} />,
  },
  {
    type: 'repost',
    icon: <Repeat2 size={defaultIconSize} />,
  },
  {
    type: 'toggleLike',
    icon: <Heart size={defaultIconSize} />,
  },
  {
    type: 'bookmark',
    icon: <Bookmark size={defaultIconSize} />,
  },
  {
    type: 'share',
    icon: <Share size={defaultIconSize} />,
  },
];

const selfPostMenuActions: PostMenuAction[] = [
  {
    type: 'delete',
    title: 'Delete post',
    icon: <Trash size={defaultIconSize} />,
  },
  {
    type: 'addToHighlights',
    title: 'Add to highlights',
    icon: <Star size={defaultIconSize} />,
  },
  {
    type: 'changeViewPermission',
    title: 'Change permission',
    icon: <SquarePen size={defaultIconSize} />,
  },
];

const otherPostMenuActions: PostMenuAction[] = [
  {
    type: 'report',
    title: 'Report post',
    icon: <Flag size={defaultIconSize} />,
  },
  {
    type: 'unlike',
    title: 'Unlike post',
    icon: <HeartOff size={defaultIconSize} />,
  },
];

type GetPostMenuActionsOptions = {
  isSelfPost?: boolean;
};

export const getPostMenuActions = ({
  isSelfPost,
}: GetPostMenuActionsOptions) => {
  return isSelfPost ? selfPostMenuActions : otherPostMenuActions;
};

export const getPostActions = () => {
  return postActions;
};

export const getPostActionCount = (
  type: PostActionType,
  config: PostActionConfig
) => {
  switch (type) {
    case 'comment':
      return config.comment.count;
    case 'repost':
      return config.repost.count;
    case 'toggleLike':
      return config.toggleLike.count;
    default:
      return null;
  }
};
