import React from "react";
import Card from "../js/Card";

function Works() {
  return (
    <>
      <section className="py-lg-5 pt-sm-5 pt-4">
        <div className="container">
          <h2 className="ff_lato fw-bold fs_4x8l text-white text-center">
            How it <span className="text_primary">works</span>
          </h2>
          <div className="row mt-lg-5 mt-sm-4">
            {Card.map((data) => {
              return (
                <div className="col-xl-3 col-sm-6 mt-4">
                  <div
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    style={{ zIndex: "3" }}
                    className="Works_sec_card pt-4 pb-5 px-4 d-flex flex-column align-items-center h-100 position-relative"
                  >
                    <span
                      style={{ zIndex: "0", position: "relative" }}
                      className="Works_count_01 d-flex justify-content-center align-items-center mt-2"
                    >
                      <a
                        style={{ zIndex: "2", position: "relative" }}
                        className="ff_lato fw-bold fs_2x8l text-white"
                      >
                        {data.serial}
                      </a>
                    </span>
                    <h2
                      style={{ zIndex: "1", position: "relative" }}
                      className="ff_lato fw-bold fs_xl text-white text-center mb-0 mt-lg-3 pt-3"
                    >
                      {data.Head}
                    </h2>
                    <p
                      style={{ zIndex: "1", position: "relative" }}
                      className="ff_lato fw-normal fs_sm text-center text-white mb-0 mt-3"
                    >
                      {data.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
