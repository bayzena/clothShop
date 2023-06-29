import { FC } from "react";

import { IOption } from "./types";

interface IProps {
  title: string;
  options: IOption[];
  selectClass?: string;
}

export const Select: FC<IProps> = (props) => {
  const { title, options, selectClass } = props;
  return (
    <>
      <span className="m-2">{title}:</span>
      <select className={selectClass}>
        {options.map((item, index) => {
          return <option key={index}>{item.title}</option>;
        })}
      </select>
    </>
  );
};
