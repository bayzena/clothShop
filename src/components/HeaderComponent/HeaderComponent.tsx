import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Icon } from "assets";
import styles from "./Header.module.scss";

interface IProps {
  children: ReactNode;
}

const Header: FC<IProps> = ({ children }) => {
  return (
    <>
      <div className={`p-4 position-absolute ${styles.login}`}>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#login"
          className="btn border-0"
        >
          <Icon name="login" />
        </button>
      </div>

      <div className="modal fade" id="login" tabIndex={-1}>
        {children}
      </div>
      <header className="overflow-hidden text-center bg-light d-flex align-items-center flex-column">
        <div className="mx-auto my-4">
          <h1>Название</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
