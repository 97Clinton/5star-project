import { SelectInput } from "@/components/global/selectInput";
import { Text } from "@/components/global/text";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  AiOutlineCamera,
  AiOutlineDoubleRight,
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineReload,
  AiOutlineRotateLeft,
  AiOutlineSync,
  AiOutlineUpload,
} from "react-icons/ai";
import { SelectItem } from "../ui/select";

export const SimulationView = () => {
  return (
    <div className="bg-white flex flex-col gap-4 w-full p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Text style="text-sm text-start text-[grey]" value="Simulator" />
          <AiOutlineSync size="1.32em" color="grey" />
        </div>
        <div className="bg-[#f9fafb] rounded-full p-2">
          <AiOutlineDoubleRight color="#6E6E82" size="1rem" />
        </div>
      </div>
      <div className="flex justify-between w-full gap-2">
        <SelectInput label="100%" placeholder="100%" style="4rem border">
          {[
            {
              title: "200%",
              value: "200%",
            },
          ].map((selectvalue, index) => {
            const { title, value } = selectvalue;
            return (
              <SelectItem value={value} key={index}>
                {title}
              </SelectItem>
            );
          })}
        </SelectInput>
        <div className="p-2 rounded-md border">
          <AiOutlineRotateLeft size="1.3rem" color="grey" />
        </div>
        <div className="p-2 rounded-md border">
          <AiOutlinePicture size="1.3rem" color="grey" />
        </div>
        <div className="p-2 rounded-md border">
          <AiOutlineHome size="1.3rem" color="grey" />
        </div>
        <div className="p-2 rounded-md border">
          <AiOutlineCamera size="1.3rem" color="grey" />
        </div>
      </div>
      <div className="flex gap-4 justify-between">
        <Button style={{border: "1px solid #000000"}} className="flex items-center gap-1 text-sm text-dark bg-white cursor-pointer justify-between">
          <AiOutlineUpload size="1.3rem" color="black" />
          Download
        </Button>
        <Button className="flex items-center gap-2 bg-dark border text-light">
          <AiOutlineReload color="white" />
          Rebuild
        </Button>
      </div>
      <div className="w-full">
        <div className=" w-[70%] m-auto">
          <img
            src="/iPhone 15 Pro Portrait Mockup label.svg"
            alt="object not found"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <SelectInput
          label="Iphone 14pro"
          placeholder="Iphone 14pro"
          style="4rem border"
        >
          {[
            {
              title: "200%",
              value: "200%",
            },
          ].map((selectvalue, index) => {
            const { title, value } = selectvalue;
            return (
              <SelectItem value={value} key={index}>
                {title}
              </SelectItem>
            );
          })}
        </SelectInput>
        <SelectInput
          label="IOS 17.2"
          placeholder="IOS 17.2"
          style="4rem border"
        >
          {[
            {
              title: "200%",
              value: "200%",
            },
          ].map((selectvalue, index) => {
            const { title, value } = selectvalue;
            return (
              <SelectItem value={value} key={index}>
                {title}
              </SelectItem>
            );
          })}
        </SelectInput>
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="airplane-mode">Debug mode</Label>
        <Switch id="airplane-mode" />
      </div>
    </div>
  );
};
