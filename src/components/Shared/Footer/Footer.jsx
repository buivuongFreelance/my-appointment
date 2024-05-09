import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer position-relative">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  {/* <Link to={"/"}>
                    <img src={logo} alt="logo" style={{ maxWidth: "160px" }} />
                  </Link> */}
                  <h4
                    style={{
                      color: "white",
                      fontWeight: 600,
                      lineHeight: 1.1,
                    }}
                  >
                    My Appointment
                  </h4>
                </div>
                <div className="footer-about-content">
                  <p className="form-text" style={{ maxWidth: 200 }}>
                    Bạn đồng hành đáng tin cậy nhất. Chúng tôi sẵn sàng làm tất
                    cả cho sức khỏe của bạn. Hãy yên tâm đến với chúng tôi
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Cho bệnh nhân</h2>
                <ul>
                  <li>
                    <Link to={"/doctors"}>
                      <FaAngleDoubleRight className="icon" /> Tìm bác sĩ
                    </Link>
                  </li>
                  <li>
                    <Link to={"/login"}>
                      <FaAngleDoubleRight className="icon" /> Đăng nhập
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/login"}>
                      <FaAngleDoubleRight className="icon" /> Đăng ký
                    </Link>
                  </li> */}
                  <li>
                    <Link to={"/doctors"}>
                      <FaAngleDoubleRight className="icon" /> Hẹn bác sĩ
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FaAngleDoubleRight className="icon" /> Quản lý bệnh nhân
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Cho Bác sĩ</h2>
                <ul>
                  <li>
                    <Link to={"/"}>
                      <FaAngleDoubleRight className="icon" /> Đặt lịch hẹn
                    </Link>
                  </li>
                  <li>
                    <Link to={"/login"}>
                      <FaAngleDoubleRight className="icon" /> Đăng nhập
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/register"}>
                      <FaAngleDoubleRight className="icon" /> Đăng ký
                    </Link>
                  </li> */}
                  <li>
                    <Link to={"/dashboard"}>
                      <FaAngleDoubleRight className="icon" /> Quản lý bác sĩ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title mt-3 mt-md-0">Liên hệ</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <p>
                      376/7 Nguyễn Phương Trinh
                      <br /> Phường 8, Bạch Đằng{" "}
                    </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    +84 0906 603 187
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i>
                    Bùi Vương
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    <a href="templateshub.net">
                      <div className="copyRight text-center">
                        <p>
                          Bản quyền {new Date().getFullYear()} bởi Bùi Vương
                        </p>
                      </div>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="copyright-menu">
                  <ul className="policy-menu d-flex gap-2 justify-content-center">
                    <Link to={"/"} className="text-white">
                      Liên hệ :
                    </Link>
                    <Link to={"/"} className="text-white">
                      0906603187
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
