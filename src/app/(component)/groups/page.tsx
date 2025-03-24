import LeftSidebar from './Components/LeftSidebar';
import MainContent from './Components/MainContent';
import RightSidebar from './Components/RightSidebar';

export default function GroupPage() {
  return (
    <div className="bg-white">
      <div className="flex text-gray-900 flex-col md:flex-row gap-6 py-6">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}
