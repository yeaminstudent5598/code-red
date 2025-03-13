function RightSideBar() {
  return (
    <div className="sticky rounded-lg shadow-sm max-lg:hidden bg-white left-0 top-0 z-20 flex h-screen w-3/12 flex-col justify-between overflow-auto border-r border-r-dark-4 px-3 lg:px-6 bg-dark-2 pb-5 pt-28 max-md:hidden">
      <div className="flex justify-between h-full flex-col">
        <div className="flex h-[50%] flex-col justify-start text-black">Who to follow</div>
        <div className="flex flex-1 flex-col justify-start text-black">Join Communities</div>
      </div>
    </div>
  );
}

export default RightSideBar;
