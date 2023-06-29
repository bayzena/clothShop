import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Правильно введите почту")
    .required("Заполните поле"),
  password: yup
    .string()
    .required("Пароль обязателен к заполнению")
    .matches(/[0-9]/, "Допустимы только числа"),
});
