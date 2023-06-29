import { FC } from "react";

interface IProps {
  src: string;
}

export const ImageModal: FC<IProps> = (props) => {
  const { src } = props;
  return (
    <div className="modal fade" id="image" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <img src={src} className="object-fit-contain w-100" />
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
  );
};
