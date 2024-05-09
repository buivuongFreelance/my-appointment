import moment from "moment";
// import "moment/locale/vi";
import { DatePicker } from "antd";

const SelectDateAndTime = ({
  content,
  handleDateChange,
  disabledDateTime,
  selectedDate,
  dContent,
  selectTime,
}) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div>
        <h5 className="text-title">Bác sĩ chọn</h5>
        {content}
      </div>

      <dir className="row">
        <div className="col-md-5 col-sm-12 mt-3">
          <h5 className="text-title mb-3">Mời bạn chọn ngày</h5>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDateTime}
            // open={true}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-md-7 col-sm-12 mt-3">
          {selectedDate && (
            <h5 className="text-title mb-3">
              Ngày chọn:{" "}
              {selectedDate &&
                moment(selectedDate).locale("vi").format("DD/MM/YYYY")}
              &nbsp;
              {selectTime && ", Giờ: " + selectTime}
            </h5>
          )}
          <div className="date-card rounded">
            <div className="row text-center mt-3">
              {!selectedDate ? (
                <h5 className="text-title d-flex justify-content-center align-items-center mt-5">
                  Bạn phải chọn ngày trước
                </h5>
              ) : (
                dContent
              )}
            </div>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default SelectDateAndTime;
