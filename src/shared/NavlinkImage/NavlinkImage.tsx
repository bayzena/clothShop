import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  to: string;
  className: string;
  src: string;
  name: string;
  classNameImage: string;
}

const NavlinkImage: FC<IProps> = (props) => {
  const { to, className, src, name, classNameImage } = props;
  return (
    <NavLink className={className} to={to}>
      <img className={classNameImage} src={src} />
      <h4>{name}</h4>
    </NavLink>
  );
};

export default NavlinkImage;
