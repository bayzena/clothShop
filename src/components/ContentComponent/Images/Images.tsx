import { FC } from "react";

interface IProps {
  setImage: () => void;
  imageSrc: string;
  mainImage: string;
  image: string;
  setMainImage: () => void;
}

const Images: FC<IProps> = ({
  setImage,
  imageSrc,
  mainImage,
  image,
  setMainImage,
}) => {
  return (
    <>
      <img
        data-bs-toggle="modal"
        data-bs-target="#image"
        src={image}
        className="mx-auto object-fit-cover m-2 rounded float-start image"
        alt="..."
      />

      <div className="d-flex flex-column">
        <img
          onClick={setImage}
          src={mainImage}
          className="w-50 m-3 object-fit-cover rounded float-start image"
          alt="..."
        />
        <img
          onClick={setMainImage}
          src={imageSrc}
          className="w-50 m-3 object-fit-cover rounded image"
          alt="..."
        />
      </div>
    </>
  );
};

export default Images;
