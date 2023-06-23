import React, { FC } from "react";

import {Form} from "react-bootstrap";

const LogInModal: FC = () => {
    return (
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Зарегистрироваться</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <Form className="row g-3 needs-validation was-validated">
                        <div className="d-flex gap-3 flex-column align-items-start">
                            <label htmlFor="validationCustomUsername" className="form-label">Почта:</label>
                            <div className="input-group has-validation ">
                                <input type="email" className="form-control " id="validationCustomUsername"
                                       aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Пожалуйста введите свою почту
                                </div>
                            </div>
                            <label htmlFor="validationCustomUsername" className="form-label">Пароль:</label>
                            <div className="input-group has-validation">
                                <input type="password" className="form-control" id="validationCustomUsername"
                                       aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Напишите пароль
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                    </button>
                    <button type="submit" data-bs-dismiss="modal" className="btn btn-default">Save changes</button>
                </div>
            </div>
        </div>
    )
}

export default LogInModal
