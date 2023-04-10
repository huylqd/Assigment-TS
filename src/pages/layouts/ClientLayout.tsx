import React from "react";
import { Outlet } from "react-router-dom";
import "../../public/css/product.css";
const ClientLayout = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="navbar-dark bg-dark">
        <nav className="navbar navbar-expand-lg container">
          <a className="navbar-brand font-weight-bold" href="/">
           
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
                <a className="nav-link" href="/">
                  Trang chủ <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Sản phẩm
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tài khoản
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/signin">
                    Đăng nhập
                  </a>
                  <a className="dropdown-item" href="/signup">
                    Đăng ký
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/admin">
                    Trang quản trị
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
              >
                Tìm kiếm
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}

      <footer className="page-footer font-small bg-dark text-light pt-4">
        <div className="container-fluid text-center text-md-left container">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Admin</h5>
              <p>Sản phẩm Vippro - Chất lượng phải được đặt lên hàng đầu</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Giới thiệu chung</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Liên hệ</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/huyss.leess.7"
                    className="text-decoration-none text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/huyss.leess.7"
                    className="text-decoration-none text-white"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/huyss.leess.7"
                    className="text-decoration-none text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2023 Copyright:
          <a
            href="/"
            className="ml-1 text-decoration-none text-white font-weight-bold"
          >
            HuyLq - PH28638
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ClientLayout;
