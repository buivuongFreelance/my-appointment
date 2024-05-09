import React from "react";
import "./index.css";
import img from "../../../images/features/dalieu.jpg";
import img2 from "../../../images/features/rang.jpg";
import img3 from "../../../images/features/timmach.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section
      className="container"
      style={{ marginTop: 200, marginBottom: 200 }}
    >
      <div className="mb-5 section-title text-center">
        <h2>Dịch vụ</h2>
        <p className="m-0">Các dịch vụ tuyệt vời của My Appointment</p>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="service-img">
              <img src={img} alt="" className="img-fluid" />
              <img src={img2} alt="" className="img-fluid mt-4" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-img mt-4 mt-lg-0">
              <img src={img3} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-content ps-4 mt-4 mt-lg-0">
              <h2>
                Dịch vụ <br />
                chuyên nghiệp
              </h2>
              <p className="mt-4 mb-5 text-secondary form-text">
                Bệnh viện cung cấp một loạt các dịch vụ chăm sóc sức khỏe, từ
                chẩn đoán và điều trị các bệnh lý đến chăm sóc và phục hồi sức
                khỏe. Đội ngũ y tế tận tâm và chuyên nghiệp của bệnh viện cung
                cấp các dịch vụ chăm sóc tận tình.
              </p>
              <Link to={"/service"} className="btn-get-started scrollto">
                Các dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
