import * as yup from "yup";

export const schema = yup.object().shape({
  length: yup
    .string()
    .required("Введите число")
    .matches(/[0-9]/, "Допустимы только числа"),

  width: yup
    .string()
    .required("Введите число")
    .matches(/[0-9]/, "Допустимы только числа"),

  item: yup
    .string()
    .required("Введите число")
    .matches(/[0-9]/, "Допустимы только числа"),
});
