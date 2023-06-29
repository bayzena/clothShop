import { FC } from "react";

import ContentComponent from "components/ContentComponent/ContentComponent";
import { description, MAIN_IMAGE } from "./constants";

const SweatshirtContainer: FC = () => {
  return <ContentComponent description={description} imageSrc={MAIN_IMAGE} />;
};

export default SweatshirtContainer;
