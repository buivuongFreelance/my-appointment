import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div>
          <small>GIẢI PHÁP DỊCH VỤ SỨC KHỎE HOÀN HẢO</small>
          <br />
          <br />
          <h1>
            Bạn đồng hành <br />
            Đáng tin cậy nhất
          </h1>
          <br />
          <small>
            Chúng tôi sẵn sàng làm tất cả cho sức khỏe của bạn. Hãy yên tâm đến
            với chúng tôi
          </small>
        </div>
        <div className="d-flex justify-content-start gap-2">
          <Link to={"/doctors"} className="btn-get-started scrollto">
            Bắt đầu
          </Link>
          <Link to={"/track-appointment"} className="btn-get-started scrollto">
            Kiểm tra cuộc hẹn
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
