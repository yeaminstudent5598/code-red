import Follow from "../(HomeComponent)/Follow";
import JoinCommunitie from "../(HomeComponent)/JoinCommunitie";

function RightSideBar() {
  return (
    <div className="sticky rounded-lg max-lg:hidden  left-0 top-0 z-20 flex h-screen w-3/12 flex-col justify-between overflow-auto border-r border-r-dark-4  bg-dark-2 pb-5 max-md:hidden">
      <div className="flex justify-between h-full flex-col">
        <div className="flex h-[50%] flex-col justify-start ">
        <Follow></Follow>
        </div>
        <div className="flex flex-1 flex-col justify-start ">
          <JoinCommunitie></JoinCommunitie>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
