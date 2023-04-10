import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserLogged } from "../../types/user";
interface IProps {
  user: UserLogged;
}
const AdminLayout = (props: IProps): any => {
  const navigate = useNavigate();
  if (props.user?.role !== "admin") {
    return navigate("/");
  }
  return (
    <div>
      <header className="navbar-light bg-light">
        <nav className="navbar navbar-expand-lg container">
          <a className="navbar-brand font-weight-bold" href="/admin">
            Admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/admin">
                  Bảng điều khiển <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/admin/categories"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Danh mục
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/admin/categories/add">
                    Thêm danh mục
                  </a>
                  <a className="dropdown-item" href="/admin/categories">
                    Danh sách danh mục
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/admin/products"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sản phẩm
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/admin/products/add">
                    Thêm sản phẩm
                  </a>
                  <a className="dropdown-item" href="/admin/products">
                    Danh sách sản phẩm
                  </a>
                </div>
              </li>
            </ul>
            <div>
              <ul className="p-0 m-0">
                <li className="nav-item dropdown list-style-none">
                  <a
                    className="dropdown-toggle text-dark nav-link px-0"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Quản trị
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Trang khách hàng
                    </a>
                    <a className="dropdown-item" href="#">
                      Cài đặt quản trị
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/signin">
                      Đăng xuất
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* CONTENT */}
      <Outlet />
      {/*  FOOTER */}
      <footer className="page-footer font-small bg-light">
        <div className="footer-copyright text-center py-3">
          © 2023 Copyright:
          <a
            href="/"
            className="text-decoration-none ml-1 text-dark font-weight-bold"
          >
            Admin
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
