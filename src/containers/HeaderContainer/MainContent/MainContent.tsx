import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./MainContent.scss";

const MainContent: FC = () => {
  return (
    <div className="main container-sm">
      <div className="container flex-wrap p-5">
        <div className="row">
          <div className="col-sm gap-2 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/sweatshirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/420a9976-b8cb-404c-a389-781dbf30ce6e/impossibly-light-womens-hooded-running-jacket-JqL8VD.png"
              />
              Кофта
            </NavLink>
          </div>
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/t-shirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ecd706a-4306-4598-beb0-9b4d3de53aa6/sportswear-womens-sports-utility-t-shirt-KJMW15.png"
              />
              Футболка
            </NavLink>
          </div>
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/sweatshirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73a0484f-954a-41f7-a9d2-7a7aebdddf54/tour-essential-mens-golf-jacket-8tp4g4.png"
              />
              Кофта
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container gap-4 flex-wrap p-5">
        <div className="row">
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/t-shirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a0c72841-146f-46e6-855e-bd68073485a9/dri-fit-mens-golf-shorts-dxjD21.png"
              />
              Шорты
            </NavLink>
          </div>
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/t-shirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9e2908e-196e-48e5-abaf-f922c4724a41/solo-swoosh-t-shirt-bkf4LK.png"
              />
              Футболка
            </NavLink>
          </div>
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/sweatshirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c168eab-a86e-4ecc-a0ac-fdaf1c9a7bf8/sportswear-club-fleece-joggers-KflRdQ.png"
              />
              Кофта
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container gap-4 flex-wrap p-5">
        <div className="row">
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/sweatshirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image "
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1f812e4-cd07-47e0-9181-7aa414fa82e4/trail-dri-fit-mens-running-t-shirt-jbSzmg.png"
              />
              Кофта
            </NavLink>
          </div>
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/t-shirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ecd706a-4306-4598-beb0-9b4d3de53aa6/sportswear-womens-sports-utility-t-shirt-KJMW15.png"
              />
              Футболка
            </NavLink>
          </div>
          <div className="col-sm gap-3 d-flex flex-column">
            <NavLink
              className="text-center text-decoration-none text-muted pageNavigation"
              to="/sweatshirt"
            >
              <img
                className="rounded object-fit-contain img-thumbnail border-0 image"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73a0484f-954a-41f7-a9d2-7a7aebdddf54/tour-essential-mens-golf-jacket-8tp4g4.png"
              />
              Кофта
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
