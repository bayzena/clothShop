import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "../constants";
import { Icon } from "assets";

const NavbarNavigation: FC = () => {
  return (
    <div className="d-flex flex-column">
      <nav className="sticky-top py-1 site-header p-3 m-3">
        <div className="container d-flex flex-column justify-content-between gap-3">
          {navLinks.map(({ to, label }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <Icon name="arrow" />
              <NavLink
                className="py-2 d-none d-md-inline-block text-decoration-none text-muted border-bottom"
                to={to}
              >
                {label}
              </NavLink>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavbarNavigation;
