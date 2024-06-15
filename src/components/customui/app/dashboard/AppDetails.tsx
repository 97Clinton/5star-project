import {
  AndroidIcon,
  IosIcon,
  MembersIcon,
  PersonIcon,
  // ThreeDotIcon,
} from "@/components/icons/PlatformIcon";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BasicPopover from "../../popover";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  item: any;
};

export const AppDetails = ({ item }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-deepgray py-4 px-7 rounded-[11px]">
      <div className="flex items-center gap-5">
        <img src={item?.logo} alt="" className="w-9 h-9 object-cover" />
        <h1 className="text-base font-medium">{item?.title}</h1>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <span className="bg-lightgreen text-lightgreen1 rounded-[23px] px-10 py-0.5 font-medium text-base capitalize">
            {item?.plan}
          </span>
          <div className="flex items-center gap-2">
            <IosIcon />
            <span className="text-xs font-medium">{item?.ios}</span>
          </div>
          <div className="flex items-center gap-2">
            <AndroidIcon />
            <span className="text-xs font-medium">{item?.android}</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button variant="outline" className=" " onClick={() => navigate("/app/edit")}>
            View
          </Button>
          <Button className="bg-[#000000]" onClick={() => navigate("/app/edit/overview")}>Edit</Button>
          {/* <ThreeDotIcon /> */}
          {/* <i className="fa-solid fa-ellipsis" style={{rotate:"90deg", fontSize:"25px"}}></i> */}
          <BasicPopover />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-12">
        <div className="flex items-center gap-2">
          <PersonIcon />
          <span className="text-xs font-medium">{item?.user}</span>
        </div>
        <div className="flex items-center gap-2">
          <MembersIcon />
          <span className="text-xs font-medium">{item?.members}</span>
        </div>
        <span className="text-xs text-[#666666] font-medium">
          {item?.lastSaved}
        </span>
      </div>
    </div>
  );
};
