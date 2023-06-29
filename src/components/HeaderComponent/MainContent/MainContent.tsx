import React, { FC } from "react";

import "./MainContent.scss";
import NavlinkImage from "shared/NavlinkImage/NavlinkImage";
import { images } from "../constants";

const MainContent: FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
      {images.map(({ to, name, src }, index) => {
        return (
          <div className="d-flex flex-column" key={index}>
            <NavlinkImage
              to={to}
              classNameImage={
                "rounded object-fit-contain img-thumbnail border-0 image"
              }
              className={
                "text-center text-decoration-none text-muted pageNavigation d-flex flex-column p-4 gap-2"
              }
              src={src}
              name={name}
            />
          </div>
        );
      })}
    </div>
  );
};
export default MainContent;
