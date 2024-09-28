import DefaultLayout from "@/layouts/default";
import { ProfilePage } from "@/components/profile/profile-page";
import {
  defaultCompany,
  defaultFeaturePhotos,
  defaultLikedPosts,
  defaultPhotos,
  defaultPosts,
  defaultProfile,
  defaultProfileStats,
} from '@/components/profile/data';

export default function IndexPage() {
  const props = {
    featurePhotos: defaultFeaturePhotos,
    profile: defaultProfile,
    company: defaultCompany,
    profileStats: defaultProfileStats,
    profileTimeline: {
      posts: defaultPosts,
      photos: defaultPhotos,
      likedPosts: defaultLikedPosts,
    },
  };

  return (
    <DefaultLayout>
      <ProfilePage {...props}/>
    </DefaultLayout>
  );
}
