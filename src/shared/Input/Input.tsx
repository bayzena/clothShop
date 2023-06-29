import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  register: UseFormRegister<any>;
  error: string | undefined;
  title?: string;
  name: string;
  spanClass?: string;
  type?: "text" | "password";
}

const Input: FC<IProps> = (props) => {
  const { register, error, title, name, spanClass, type = "text" } = props;
  console.log(error);
  return (
    <>
      <span className={spanClass}>{title} </span>
      <input {...register(name)} type={type} className="form-control" />
      <p className="text-danger">{error}</p>
    </>
  );
};

export default Input;
