import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../schema";
import LogInModal from "components/HeaderComponent/LogInModal/LogInModal";
import { ILogin } from "../types";

const LoginContainer: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: ILogin) => {
    console.log(data, "data");
  };
  return (
    <LogInModal
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      description={"Зарегистрироваться"}
      type={"submit"}
    />
  );
};

export default LoginContainer;
