import React from "react";
import "./InfoPage.css";
import { FaClock, FaHeadset, FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (
    <section className="why-us mt-5 mt-md-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Lý do để chọn</h3>
              <p>
                Chúng tôi là lựa chọn hàng đầu cho sức khỏe của bạn vì chúng tôi
                cam kết mang đến dịch vụ y tế chất lượng và tận tình nhất. Với
                đội ngũ y bác sĩ, y tá và nhân viên chuyên nghiệp, chúng tôi
                luôn sẵn lòng sẵn sàng chăm sóc, điều trị và hỗ trợ bạn trong
                mọi tình huống. Chúng tôi sở hữu các trang thiết bị y tế hiện
                đại và công nghệ tiên tiến nhất.
              </p>
              {/* <div className="text-center">
                <Link href="/" className="more-btn">
                  Tìm hiểu thêm <i className="bx bx-chevron-right"></i>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHouseUser className="icon" />
                    <h4>Tạo cuộc hẹn</h4>
                    <small className="text-secondary">Dịch vụ 24h</small>
                    <p>
                      Chúng tôi cam kết sẽ cung cấp dịch vụ đặt lịch hẹn nhanh
                      chóng, thuận tiện và linh hoạt nhất để đáp ứng nhu cầu y
                      tế của quý vị.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHeadset className="icon" />
                    <h4>Cấp cứu khẩn cấp</h4>
                    <h6 className="text-secondary">+84 0906 603 187</h6>
                    <p>
                      Trong trường hợp cần khẩn cấp y tế, hãy liên hệ ngay với
                      chúng tôi bằng số điện thoại trên để được hỗ trợ và điều
                      trị kịp thời.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaClock className="icon" />
                    <h4>Thời gian làm việc</h4>
                    <small className="text-secondary">Thời khóa biểu</small>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Thứ 2-Thứ 6:</p>
                        <p>&nbsp; 8:00-17:00</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Thứ 7-CN không làm việc</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
