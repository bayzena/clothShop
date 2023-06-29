import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Input from "shared/Input/Input";
import { IParameters } from "./types";
import { inputNames, mainImage, meter, options } from "./constants";
import { Select } from "shared/Select/Select";
import { ImageModal } from "./ImageModal/ImageModal";
import { schema } from "containers/schema";
import Images from "./Images/Images";
import "./Content.scss";

interface IProps {
  description: string;
  imageSrc: string;
}
const ContentComponent: FC<IProps> = ({ description, imageSrc }) => {
  const [result, setResult] = useState("");
  const [image, setImage] = useState(imageSrc);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const changeImage = () => {
    setImage(mainImage);
  };
  const changeMainImage = () => {
    setImage(imageSrc);
  };
  const onSubmit = (data: IParameters) => {
    setResult(String(((+data.length * +data.width) / meter) * +data.item));
  };

  return (
    <div className="d-flex content m-4">
      <Images
        setImage={changeImage}
        imageSrc={imageSrc}
        mainImage={mainImage}
        setMainImage={changeMainImage}
        image={image}
      />
      <ImageModal src={image} />

      <div className="d-flex flex-column gap-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex m-4 gap-4">
            {inputNames.map(({ title, name }, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-column align-items-start w-50"
                >
                  <Input
                    name={title}
                    title={name}
                    spanClass="m-2"
                    register={register}
                    error={errors.length?.message}
                  />
                </div>
              );
            })}
            <div className="d-flex flex-column align-items-start w-50">
              <Select
                title={"Тип"}
                options={options}
                selectClass={"form-select"}
              />
            </div>
          </div>

          <div className="d-flex flex-column">
            <h3 className="p-4">Описание</h3>
            <p className="m-4">{description}</p>
            <Button type={"submit"} className="btn btn-primary">
              Посчитать
            </Button>
          </div>
          <h4 className="p-4">Сумма {result} </h4>
        </form>
      </div>
    </div>
  );
};

export default ContentComponent;
