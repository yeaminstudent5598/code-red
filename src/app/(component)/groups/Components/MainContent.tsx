
import GroupCard from './Design/GroupCard';
import PostCreator from './Design/PostCreator';
import GroupPostCard from './Design/GroupPostCard';

export default function MainContent() {
  return (
    <div className="w-full  space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <GroupCard />

        <PostCreator />
        <GroupPostCard />

      </div>
    </div>
  );
}
