import "../../globals.css"
import GroupHeader from "./Component/GroupHeader";
export default function DashboardLayout({
    children
  }) {
    return (
      <div className="bg-none">
        <GroupHeader></GroupHeader>
        {children}
      </div>
    );
  }
  