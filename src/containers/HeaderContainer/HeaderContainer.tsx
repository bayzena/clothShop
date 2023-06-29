import { FC } from "react";

import HeaderComponent from "components/HeaderComponent/HeaderComponent";
import LoginContainer from "./LoginContainer/LoginContainer";

const HeaderContainer: FC = () => {
  return <HeaderComponent children={<LoginContainer />} />;
};

export default HeaderContainer;
