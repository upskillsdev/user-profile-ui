import { PostCardProps, PostsProps, PostStats } from '../../types';
import { useProfile } from '../../use-profile';
import { PostCard } from './post-card';

export const Posts = ({ posts }: PostsProps) => {
  const currentProfile = useProfile();

  const getPostActionsConfig = (
    stats: PostStats
  ): PostCardProps['postActionConfig'] => {
    return {
      comment: {
        count: stats.comments,
        handler: (postId) => {
          alert(`Commented on post ${postId} clicked`);
        },
      },
      repost: {
        count: stats.reposts,
        handler: (postId) => {
          alert(`Reposted post ${postId} clicked`);
        },
      },
      toggleLike: {
        count: stats.likes,
        handler: (postId) => {
          alert(`Liked post ${postId} clicked`);
        },
      },
      bookmark: {
        handler: (postId) => {
          alert(`Bookmarked post ${postId} clicked`);
        },
      },
      share: {
        handler: (postId) => {
          alert(`Shared post ${postId} clicked`);
        },
      },
    };
  };

  const postMenuActionsConfig: PostCardProps['postMenuActionConfig'] = {
    addToHighlights: (postId: string) => {
      alert(`Added post ${postId} to highlights`);
    },
    changeViewPermission: (postId: string) => {
      alert(`Changed view permission for post ${postId}`);
    },
    delete: (postId: string) => {
      alert(`Deleted post ${postId}`);
    },
    report: (postId: string) => {
      alert(`Reported post ${postId}`);
    },
    unlike: (postId: string) => {
      alert(`Unliked post ${postId}`);
    },
  };

  return (
    <div className="flex flex-col">
      {posts.map(({ content, createdAt, id, profile, stats }) => {
        return (
          <PostCard
            key={id}
            postId={id}
            createdAt={createdAt}
            content={content}
            authorName={profile.name}
            authorUsername={profile.username}
            avatar={profile.avatar}
            isSelfPost={currentProfile?.username === profile.username}
            postActionConfig={getPostActionsConfig(stats)}
            postMenuActionConfig={postMenuActionsConfig}
          />
        );
      })}
    </div>
  );
};
