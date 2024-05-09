import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import register from "../../images/doc/register.svg";
import SignIn from "./SignIn";
import "./SignInForm.css";
import SignUp from "./SignUp";
import useAuthCheck from "../../redux/hooks/useAuthCheck";

const SignInForm = () => {
  const { data: loggedInUser, role } = useAuthCheck();
  const [isSignUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser?.id) {
      navigate("/");
    }
  });

  return (
    <div
      className={`${
        isSignUp
          ? "signin-signup-container sign-up-mode"
          : "signin-signup-container"
      }`}
    >
      <Link to="/">
        <span className="pageCloseBtn">
          <FaTimes />
        </span>
      </Link>
      <div className="forms-container">
        <div className="signIn-singUp">
          <SignIn />
          <SignUp setSignUp={setSignUp} />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="text-white">My Appointment</h3>
            <p>
              Để thuận tiện cho việc demo, đây là các tài khoản cho bạn đăng
              nhập để test. Lưu ý là web không có phần đăng ký do mục đích là để
              demo.
            </p>
            <b>Cho bác sĩ</b>
            <br />
            <b>Email:</b> buivuongdhmo@gmail.com
            <br />
            <b>Mật khẩu:</b> admin123
            <hr />
            <b>Cho bệnh nhân</b>
            <br />
            <b>Email:</b> patient1@gmail.com
            <br />
            <b>Mật khẩu:</b> patient
            <hr />
            <br />
            <button className="iBtn transparent" onClick={() => navigate("/")}>
              Trở về
            </button>
          </div>
          {/* <img src={`${log}`} alt="" style={{  }} /> */}
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3 className="text-white">One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              beatae quas magnam!
            </p>
            <button
              className="iBtn transparent"
              onClick={() => setSignUp(false)}
            >
              Sign In
            </button>
          </div>
          <img src={`${register}`} alt="" className="pImg" />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
