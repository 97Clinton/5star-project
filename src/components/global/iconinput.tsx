import React from "react";
import { Input } from "../ui/input";


export const IconInput = ({
  icon,
  placeHolder,
  type,
  // style,
  category,
  field,
}: {
  icon: React.ReactNode;
  placeHolder: string;
  type: string;
  style?: string;
  category: "formInput" | "planeInput";
  field?: any;
}) => {
  return (
    <div className=" relative" >
      <span className="absolute top-[0.7rem] right-[1rem] left-[0.5rem]">{icon}</span>
      <span>
        {category === "formInput" ? (
          <Input
            placeholder={placeHolder}
            {...field}
            type={type}
            className="px-[2.2rem] py-[0.6rem]"
          />
        ) : (
          <Input
            placeholder={placeHolder}
            type={type}
            className="px-[2rem] py-[0.6rem]"
          />
        )}
      </span>
    </div>
  );
};
