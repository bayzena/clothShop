import React, {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";

import LogInModal from "./LogInModal/LogInModal";
import MainContent from "./MainContent/MainContent";
import './Header.scss'
import {navLinks} from "./constants";

const Header : FC = (props) => {
    return (
        <>
            <div className='p-4 position-absolute login' >
                <button type="button" data-bs-toggle="modal" data-bs-target="#login" className="btn border-0">
                    <svg height="40px" width="40px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"
                         fill="#c8cbce" stroke="#c8cbce"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{'fill : #d1d0d2'} </style>
                            <g>
                                <path className="st0"
                                      d="M256,0C114.613,0,0,114.616,0,255.996C0,397.382,114.613,512,256,512c141.386,0,256-114.617,256-256.004 C512,114.616,397.387,0,256,0z M255.996,401.912c-69.247-0.03-118.719-9.438-117.564-18.058 c6.291-47.108,44.279-51.638,68.402-70.94c10.832-8.666,16.097-6.5,16.097-20.945c0-5.053,0-14.446,0-23.111 c-6.503-7.219-8.867-6.317-14.366-34.663c-11.112,0-10.396-14.446-15.638-27.255c-4.09-9.984-0.988-14.294,2.443-16.165 c-1.852-9.87-0.682-43.01,13.532-60.259l-2.242-15.649c0,0,4.47,1.121,15.646-1.122c11.181-2.227,38.004-8.93,53.654,4.477 c37.557,5.522,47.53,36.368,40.204,72.326c3.598,1.727,7.178,5.962,2.901,16.392c-5.238,12.809-4.522,27.255-15.634,27.255 c-5.496,28.346-7.863,27.444-14.366,34.663c0,8.666,0,18.058,0,23.111c0,14.445,5.261,12.279,16.093,20.945 c24.126,19.301,62.111,23.831,68.406,70.94C374.715,392.474,325.246,401.882,255.996,401.912z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            <div className="modal fade" id="login" tabIndex={-1}>
                <LogInModal />
            </div>
            <header className="overflow-hidden text-center bg-light d-flex align-items-center flex-column">
                <div className="mx-auto my-4">
                    <h1>Название</h1>
                </div>
                <div className="product-device box-shadow d-none d-md-block"></div>
                <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </header>

            <div className='d-flex'>
                <div className='d-flex flex-column'>
                    <nav className="sticky-top py-1 site-header p-3 m-3">
                        <div className="container d-flex flex-column justify-content-between">
                            {navLinks.map((item : any, index: any) => (
                                <div className="d-flex align-items-center" key={index}>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path opacity="0.4" d="M15.4807 13.2302L11.6907 8.18018H6.08072C5.12072 8.18018 4.64073 9.34018 5.32073 10.0202L10.5007 15.2002C11.3307 16.0302 12.6807 16.0302 13.5107 15.2002L15.4807 13.2302Z" fill="#292D32">

                                            </path>
                                            <path d="M17.9195 8.18018H11.6895L15.4795 13.2302L18.6895 10.0202C19.3595 9.34018 18.8795 8.18018 17.9195 8.18018Z" fill="#292D32"></path>
                                        </g>
                                    </svg>
                                    <NavLink className="py-2 d-none d-md-inline-block text-decoration-none text-muted border-bottom" to={item.to}>{item.label}</NavLink>
                                </div>
                            ))}
                        </div>
                    </nav>
                </div>

                 <Outlet />
            </div>
        </>

    )
}

export default Header;
