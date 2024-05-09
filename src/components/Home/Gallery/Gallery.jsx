import React from "react";
import img2 from "../../../images/features/chinhhinh.jpg";
import img3 from "../../../images/features/nhikhoa.jpg";
import img4 from "../../../images/features/phoi.jpg";
import img5 from "../../../images/features/timmach.jpg";
import img6 from "../../../images/features/thankinh.jpg";
import img7 from "../../../images/features/noitiet.jpg";
import img8 from "../../../images/features/dalieu.jpg";
import img9 from "../../../images/features/rang.jpg";
import "./index.css";
import { Image } from "antd";

const Gallery = () => {
  const imageArray = [img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <section className="gallery container">
      <div className="text-center mb-5">
        <div className="section-title mb-3">
          <h2>Ảnh bệnh viện</h2>
          <p>Đây là các ảnh của bệnh viện</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          <Image.PreviewGroup>
            {imageArray.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-12" key={index + 55}>
                <div className="gallery-item">
                  <div className="galelry-lightbox d-flex justify-content-center align-items-center">
                    <Image
                      src={item}
                      alt=""
                      className="w-100"
                      style={{
                        objectFit: "cover",
                        maxHeight: "280px",
                        minHeight: "280px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
