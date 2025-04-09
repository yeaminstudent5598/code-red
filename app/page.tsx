
import HomeLeft from "@/components/HomeLeft/HomeLeft";
import HomeCenter from "@/components/HomeCenter/HomeCenter";
import HomeRight from "@/components/HomeRight/HomeRight";
import ModalClient from "@/components/ModalClient/ModalClient";

export default function Home() {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_80%] lg:grid-cols-[20%_60%_20%] ">
      <HomeLeft />
      <HomeCenter />
      <ModalClient/>
      <HomeRight />
    </div>
  );
}
