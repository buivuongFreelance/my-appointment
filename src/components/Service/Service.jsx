import React from "react";
import SubHeader from "../Shared/SubHeader";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { Link } from "react-router-dom";
import doctorBg from "../../images/img/doctor.png";
import img2 from "../../images/features/chinhhinh.jpg";
import img3 from "../../images/features/nhikhoa.jpg";
import img4 from "../../images/features/phoi.jpg";
import img5 from "../../images/features/timmach.jpg";
import img6 from "../../images/features/thankinh.jpg";
import img7 from "../../images/features/noitiet.jpg";
import img8 from "../../images/features/dalieu.jpg";
import img9 from "../../images/features/rang.jpg";

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100,
  };

  const items = [
    {
      img: img3,
      title: "Khoa Nhi",
      desc: "Khoa Nhi chuyên chăm sóc sức khỏe toàn diện cho trẻ em từ sơ sinh đến tuổi vị thành niên.",
    },
    {
      img: img2,
      title: "Khoa chỉnh hình",
      desc: "Khoa Chỉnh hình, chuyên về chẩn đoán và điều trị các vấn đề liên quan đến xương khớp.",
    },
    {
      img: img4,
      title: "Khoa phổi",
      desc: "Khoa Phổi là một phần của Y học chăm sóc và điều trị các vấn đề liên quan đến hệ hô hấp.",
    },
    {
      img: img5,
      title: "Khoa tim mạch",
      desc: "Khoa Tim mạch chẩn đoán và điều trị các vấn đề liên quan đến tim và hệ thống mạch máu.",
    },
    {
      img: img6,
      title: "Khoa thần kinh",
      desc: "Khoa Thần Kinh chẩn đoán và điều trị các vấn đề liên quan đến tâm lý và thần kinh.",
    },
    {
      img: img7,
      title: "Khoa nội tiết",
      desc: "Khoa nội tiết chẩn đoán và điều trị các vấn đề liên quan đến nội tiết và tiêu hóa.",
    },
    {
      img: img8,
      title: "Khoa da liễu",
      desc: "Khoa da liễu chẩn đoán và điều trị các vấn đề liên quan đến vấn đề nhạy cảm.",
    },
    {
      img: img9,
      title: "Khoa răng hàm mặt",
      desc: "Khoa răng hàm mặt chẩn đoán và điều trị các vấn đề liên quan đến vấn đề răng miệng.",
    },
  ];
  return (
    <>
      <Header />
      <SubHeader
        title="Dịch vụ"
        subtitle="Các dịch vụ tuyệt vời của My Appointment"
      />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {items.map((item, key) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
                <div className="card shadow border-0 mb-5">
                  <img
                    src={item?.img}
                    alt=""
                    className="img-fluid"
                    style={{ maxHeight: "17rem", objectFit: "cover" }}
                  />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">{item.title}</h4>
                    <p className="mb-4">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div
          className="container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className="mb-4 section-title text-center">
                  <h2 className="text-uppercase">
                    Chúng tôi rất vui mừng được đón tiếp bạn.
                  </h2>
                  <p className="form-text">
                    Bạn có thể xem tiếp các bác sĩ chúng tôi tại đây
                  </p>
                  <Link to={"/doctors"} className="btn-get-started scrollto">
                    Bắt đầu xem
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;
