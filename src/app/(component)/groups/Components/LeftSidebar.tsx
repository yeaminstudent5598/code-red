import GroupsList from './Design/GorupList';
import Profile from './Design/Profile';

export default function LeftSidebar() {
  return (
    <div className="w-full  space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <Profile />
        <GroupsList />
      </div>
    </div>
  );
}
