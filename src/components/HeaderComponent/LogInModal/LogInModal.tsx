import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import Input from "shared/Input/Input";
import { ILogin } from "containers/HeaderContainer/types";

interface IProps {
  handleSubmit: UseFormHandleSubmit<ILogin>;
  onSubmit: (data: ILogin) => void;
  errors?: any;
  register: UseFormRegister<ILogin>;
  description: string;
  type: "submit" | "button";
}

const LogInModal: FC<IProps> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  description,
  type,
}) => {
  console.log(errors);
  return (
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {description}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div className="modal-body">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="row g-3 needs-validation"
          >
            <div className="d-flex gap-3 flex-column align-items-center">
              <div className="d-flex flex-column w-100 gap-1">
                <span>Почта:</span>
                <Input
                  register={register}
                  error={errors?.email?.message}
                  name={"email"}
                />
              </div>
              <div className="d-flex flex-column w-100 gap-1 ">
                <span>Пароль:</span>
                <Input
                  register={register}
                  error={errors?.password?.message}
                  name={"password"}
                  type={"password"}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
              <button type={type} className="btn btn-primary">
                Сохранить
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
