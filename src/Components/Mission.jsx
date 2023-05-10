import React from "react";
import mission from "../assets/img/webp/mission -img.webp";

function Mission() {
  return (
    <>
      <section className="pt-4 pb-lg-5 pt-md-5 position-relative mb-5">
        <span className="bg_shadow position-absolute moving_animation1"></span>
        <span className="bg_shadow1 position-absolute moving_animation1"></span>

        <div className="container pb-4">
          <div className="row justify-content-between align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 mt-5 mt-md-0">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="d-flex justify-content-center align-items-center"
              >
                <img className="img-size" src={mission} alt="img" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1 className="ff_lato fw-bold fs_4x8l text-white mb-0">
                  Our
                  <span className="text_primary"> Mission</span>
                </h1>
                <p className="ff_lato fw-normal fs_md text-white mb-0 mt-lg-4 mt-2 pt-1 pb-lg-3">
                  We understand that one of the biggest concerns for early-stage
                  investors is that it can quickly become stressful,
                  overwhelming, and especially extremely time consuming. It
                  isn’t easy to balance a full time job, family, and an active
                  investment portfolio, especially when just starting out.
                </p>
                <a
                  class="ff_lato fw_medium fs_xl text-white z_index text_stroke mt-lg-5 mt-4 d-inline-block bottom_line explore_btn"
                  href="#about"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
