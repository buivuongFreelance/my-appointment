import { useEffect, useState } from "react";
import "./index.css";
import useAuthCheck from "../../../redux/hooks/useAuthCheck";
import TopHeader from "../TopHeader/TopHeader";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../images/logo.png";
import avatar from "../../../images/avatar.jpg";
import { Button, message } from "antd";
import { loggedOut } from "../../../service/auth.service";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const navigate = useNavigate();
  const { authChecked, data } = useAuthCheck();
  const [isLoggedIn, setIsLogged] = useState(false);
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  // const lastScrollRef = useRef(0);
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    // if (currentScroll > lastScrollRef.current) { // Undo scroll up effect
    if (currentScroll > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
    // lastScrollRef.current = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    authChecked && setIsLogged(true);
  }, [authChecked]);

  const hanldeSignOut = () => {
    loggedOut();
    message.success("Đăng xuất thành công");
    setIsLogged(false);
    navigate("/");
  };

  const content = (
    <div className="nav-popover">
      <div className="my-2">
        <h5 className="text-capitalize">
          {data?.firstName + " " + data?.lastName}
        </h5>
        <p className="my-0">{data?.email}</p>
        <Link to="/dashboard">Trang thông tin</Link>
      </div>
      <Button
        variant="outline-danger"
        className="w-100"
        size="sm"
        onClick={hanldeSignOut}
      >
        Đăng xuất
      </Button>
    </div>
  );
  return (
    <>
      <div
        className={`navbar navbar-expand-lg navbar-light ${
          !show && "hideTopHeader"
        }`}
        expand="lg"
      >
        <TopHeader />
      </div>
      <header id="header" className={`fixed-top ${!show && "stickyHeader"}`}>
        <div className="container d-flex align-items-center">
          <Link to={"/"} className="logo me-auto">
            <h4 style={{ color: "#0f2c3a", fontWeight: 600, lineHeight: 1.1 }}>
              My Appointment
            </h4>
          </Link>
          <HeaderNav
            isLoggedIn={isLoggedIn}
            data={data}
            avatar={avatar}
            content={content}
            open={open}
            setOpen={setOpen}
          />
          <Link to={"/doctors"} className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Tạo</span> cuộc hẹn
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
