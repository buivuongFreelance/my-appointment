import { Checkbox, message } from "antd";
import { useEffect, useState } from "react";
import useAuthCheck from "../../redux/hooks/useAuthCheck";

const PersonalInformation = ({
  handleChange,
  selectValue,
  setSelectValue,
  setPatientId = () => {},
}) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    reasonForVisit,
    description,
    address,
  } = selectValue;
  //   const [checked, setChecked] = useState(false);
  const { data } = useAuthCheck();

  //   const onChange = (e) => {
  //     setChecked(e.target.checked);
  //   };

  //   useEffect(() => {
  //     if (checked) {
  //       if (data.id) {
  //         setPatientId(data.id);
  //         message.success("User Has Found !");
  //       } else {
  //         message.error("User is not Found, Please Login!");
  //       }
  //     }
  //   }, [checked, data, setPatientId]);

  useEffect(() => {
    if (data?.id) {
      setPatientId(data?.id);
      setSelectValue({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phone: data?.mobile || "",
        address: data?.address || "",
      });

      message.success("Đồng hóa dữ liệu bệnh nhân !");
    } else {
      //   message.error("Bệnh nhân không có dữ liệu, xin đăng nhập!");
    }
  }, [data]);

  return (
    <form className="rounded p-3 mt-5" style={{ background: "#f8f9fa" }}>
      <div className="row">
        {/* <Checkbox checked={checked} onChange={onChange}>
          Bạn đã có account
        </Checkbox> */}

        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Họ</label>
            <input
              onChange={(e) => handleChange(e)}
              name="firstName"
              value={firstName && firstName}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Tên</label>
            <input
              onChange={(e) => handleChange(e)}
              name="lastName"
              value={lastName && lastName}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Email</label>
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              value={email && email}
              className="form-control"
              type="email"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Điện thoại</label>
            <input
              onChange={(e) => handleChange(e)}
              name="phone"
              value={phone && phone}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Lý do hẹn</label>
            <textarea
              rows={8}
              onChange={(e) => handleChange(e)}
              name="reasonForVisit"
              value={reasonForVisit && reasonForVisit}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Mô tả</label>
            <textarea
              rows={8}
              onChange={(e) => handleChange(e)}
              name="description"
              value={description && description}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-group card-label mb-3">
            <label>Địa chỉ</label>
            <input
              onChange={(e) => handleChange(e)}
              name="address"
              value={address && address}
              className="form-control"
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
