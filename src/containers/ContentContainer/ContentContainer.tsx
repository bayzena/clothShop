import { ChangeEvent, FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./schema";
import "./Content.scss";

interface IProps {
  description: string;
  imageSrc: string;
}

const ContentContainer: FC<IProps> = (props) => {
  const { description, imageSrc } = props;
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [item, setItem] = useState("1");
  const [select, setSelect] = useState("440");
  const [result, setResult] = useState("");
  const [image, setImage] = useState(imageSrc);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: object) => {
    setResult(
      String(
        ((Number(value) * Number(value2)) / 100) * Number(select) * Number(item)
      )
    );
    console.log(data);
  };

  return (
    <div className="d-flex content m-4">
      <div>
        <img
          data-bs-toggle="modal"
          data-bs-target="#image"
          src={image}
          className="mx-auto object-fit-cover m-2 rounded float-start image"
          alt="..."
        />
      </div>

      <div className="d-flex flex-column">
        <img
          onClick={() =>
            setImage(
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/841d00f4-1cb9-45ee-bd30-042dae82d8e1/impossibly-light-womens-hooded-running-jacket-8c5krm.png"
            )
          }
          src={
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/841d00f4-1cb9-45ee-bd30-042dae82d8e1/impossibly-light-womens-hooded-running-jacket-8c5krm.png"
          }
          className="w-50 m-3 object-fit-cover rounded float-start image"
          alt="..."
        />
        <img
          onClick={() => setImage(imageSrc)}
          src={imageSrc}
          className="w-50 m-3 object-fit-cover rounded image"
          alt="..."
        />
      </div>

      <div className="modal fade" id="image" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <img src={imageSrc} className="object-fit-contain w-100" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex m-4 gap-4">
            <div className="d-flex flex-column align-items-start w-50">
              <span className="m-2">Длина:</span>
              <input
                {...register("length")}
                type="text"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
                className="form-control"
              />
              <p className="text-danger">{errors.length?.message}</p>
            </div>
            <div className="d-flex flex-column align-items-start w-50">
              <span className="m-2">Ширина:</span>
              <input
                {...register("width")}
                type="text"
                value={value2}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue2(e.target.value)
                }
                className="form-control"
              />
              <p className="text-danger">{errors.width?.message}</p>
            </div>
            <div className="d-flex flex-column align-items-start w-50">
              <span className="m-2">Количество:</span>
              <input
                {...register("item")}
                value={item}
                onChange={(item) => setItem(item.target.value)}
                type="number"
                className="form-control"
              />
              <p className="text-danger">{errors.item?.message}</p>
            </div>
            <div className="d-flex flex-column align-items-start w-50">
              <span className="m-2">Тип:</span>
              <select
                value={select}
                onChange={(value: ChangeEvent<HTMLSelectElement>) =>
                  setSelect(value.target.value)
                }
                className="form-control input-lg"
                name="type"
              >
                <option selected value="800">
                  Атлас
                </option>
                <option value="780">Шелк</option>
                <option value="1200">Флис</option>
                <option value="440">Хлопок</option>
              </select>
            </div>
          </div>

          <div className="d-flex flex-column">
            <h3 className="p-4">Описание</h3>
            <p className="m-4">{description}</p>
            <button type="submit" className="btn btn-light">
              Посчитать
            </button>
          </div>
          <h4 className="p-4">Сумма {Number(result).toFixed()} </h4>
        </form>
      </div>
    </div>
  );
};

export default ContentContainer;
