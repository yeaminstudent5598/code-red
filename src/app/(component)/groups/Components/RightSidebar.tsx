import Admin from './Design/AdminCard';
import Members from './Design/Members';

export default function RightSidebar() {
  return (
    <div className="w-full  space-y-6">
      <Members />
      <Admin />
    </div>
  );
}
