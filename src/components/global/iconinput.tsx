import React from "react";
import { Input } from "../ui/input";

export const IconInput = ({
  icon,
  placeHolder,
  defaultValue,
  type,
  style,
  category,
  field,
}: {
  icon: React.ReactNode;
  defaultValue?:string;
  placeHolder: string;
  type: string;
  style?: string;
  category: "formInput" | "planeInput";
  field?: any;
}) => {
  return (
    <div className="relative">
      <span className="absolute top-[0.8rem] left-[0.5rem]">{icon}</span>
      <span>
        {category === "formInput" ? (
          <Input
            placeholder={placeHolder}
            {...field}
            type={type}
            className={`${style ? style : ''} iconInput`}
            defaultValue={defaultValue}
          />
        ) : (
          <Input
            placeholder={placeHolder}
            type={type}
            className={`${style ? style : ''}  iconInput`}
            defaultValue={defaultValue}
          />
        )}
      </span>
    </div>
  );
};
