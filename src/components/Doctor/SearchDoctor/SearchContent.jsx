import React from "react";
import { Link, useNavigate } from "react-router-dom";
import showImg from "../../../images/specialities/specialities-01.png";
import StarRatings from "react-star-ratings";
import { Tag, message } from "antd";
import "./index.css";
import {
  FaLocationArrow,
  FaRegThumbsUp,
  FaDollarSign,
  FaComment,
} from "react-icons/fa";
import { truncate } from "../../../utils/truncate";
import useAuthCheck from "../../../redux/hooks/useAuthCheck";

const SearchContent = ({ data }) => {
  const { data: loggedInUser, role } = useAuthCheck();
  const navigation = useNavigate();

  const services = data?.services?.split(",");
  return (
    <div className="mb-4 rounded" style={{ background: "#f3f3f3" }}>
      <div className="d-flex p-3 justify-content-between">
        <div className="d-flex gap-3">
          <div className="doc-img-fluid d-flex align-items-center">
            {data?.img && <img src={data?.img} className="" alt="User Image" />}
          </div>
          <div className="doc-info">
            <h5 className="mb-0">
              <Link to={`/doctors/profile/${data?.id}`}>
                Bác sĩ {data?.firstName + " " + data?.lastName}
              </Link>
            </h5>
            <p className="m-0 form-text">
              {data?.gender === "male" ? "Nam" : "Nữ"}
            </p>
            {/* <p className="doc-department m-0">
              <img src={showImg} className="img-fluid" alt="Speciality" />
              Urology
            </p> */}

            {/* <div className="d-flex align-items-center">
              <div>
                <StarRatings
                  rating={5}
                  starRatedColor="#f4c150"
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px"
                  starSpacing="2px"
                />
              </div>
              <div>(4)</div>
            </div> */}

            <div className="clinic-details">
              {/* <p className="form-text text-secondary">
                <FaLocationArrow /> {data?.address}, {data?.country}
              </p> */}
              {/* <ul className="clinic-gallery mt-3">
                <li>
                  <img
                    src={showImg}
                    alt="Feature"
                    style={{ maxWidth: "30px" }}
                  />
                </li>
                <li>
                  <img
                    src={showImg}
                    alt="Feature"
                    style={{ maxWidth: "30px" }}
                  />
                </li>
                <li>
                  <img
                    src={showImg}
                    alt="Feature"
                    style={{ maxWidth: "30px" }}
                  />
                </li>
                <li>
                  <img
                    src={showImg}
                    alt="Feature"
                    style={{ maxWidth: "30px" }}
                  />
                </li>
              </ul> */}
            </div>
            {services?.map((item, id) => (
              <Tag key={id + 51}>{item}</Tag>
            ))}
          </div>
        </div>
        <div className="doc-info-right me-3">
          <div className="clini-infos">
            <ul>
              {/* <li>
                <FaRegThumbsUp /> 97%
              </li>
              <li>
                <FaComment /> 4 Feedback
              </li>
              <li>
                <FaLocationArrow />
                {truncate(data?.clinicAddress, 20)}
              </li> */}
              {/* <li>
                <FaDollarSign /> {data?.price ? truncate(data?.price, 4) : 60}{" "}
                (Per Hour)
              </li> */}
              {/* <li>
                <FaDollarSign />{" "}
                {data?.price ? truncate(data?.price, 4) : 60000} (Per Hour)
              </li> */}
            </ul>
          </div>
          <div className="clinic-booking">
            <Link to={`/doctors/profile/${data?.id}`} className="view-pro-btn">
              Xem tiểu sử
            </Link>
            {loggedInUser?.email !== data?.email ? (
              <a
                target="_blank"
                style={{
                  cursor: "pointer",
                }}
                className="apt-btn"
                onClick={() => {
                  if (loggedInUser?.email) {
                    navigation(`/booking/${data?.id}`);
                  } else {
                    message.warning("Bạn phải đăng nhập để đặt lịch.");
                  }
                }}
              >
                Đặt lịch
              </a>
            ) : (
              <div className="text-primary">Đây là bạn</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchContent;
