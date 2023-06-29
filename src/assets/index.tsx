import { ReactComponent as ArrowICon } from "./arrow.svg";
import { ReactComponent as LoginIcon } from "./login.svg";
import { SvgIconProps } from "./types";

const icons = {
  arrow: ArrowICon,
  login: LoginIcon,
};

interface IconProps extends SvgIconProps {
  name: keyof typeof icons;
}

export const Icon = (props: IconProps) => {
  const { name, ...rest } = props;

  const IconComponent = icons[name];

  return <IconComponent {...rest} />;
};

export { LoginIcon, ArrowICon };
