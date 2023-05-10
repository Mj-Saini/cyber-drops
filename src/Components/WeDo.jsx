import React from "react";
import prasuet from "../assets/img/webp/prasuet.webp";
import perasute1 from "../assets/img/svg/seven-color.svg";

function WeDo() {
  return (
    <>
      <section className="pb-4 pt-4 py-md-5 position-relative">
        <img
          style={{ zIndex: "1" }}
          className="bottom-0 perasute2_position moving_animation end-0 position-absolute d-none d-md-flex"
          src={perasute1}
          alt="img"
        />
        <span className="bg_shadow position-absolute top-50 moving_animation1"></span>
        <span className="bg_shadow1 position-absolute moving_animation1"></span>
        <div className="container">
          <div className="row align-items-center justify-content-between flex-column-reverse flex-md-row">
            <div className="col-md-6 mt-5 mt-md-0">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img className="w-100" src={prasuet} alt="img" />
              </div>
            </div>
            <div className="col-md-5 mt-sm-5 mt-4 mt-md-0">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className=""
              >
                <h2 className="ff_lato fw-bold fs_4x8l text-white mb-0">
                  What <span className="text_primary">we do</span>
                </h2>
                <p className="ff_lato fw-normal fs_md text-white mb-0 mt-sm-3 mt-2 pt-1">
                  1000 Cyber Drops will be dropping on Ethereum in March 2022.
                  Each and every Cyber Drop is uniquely hand crafted. This is
                  just the beginning of our journey. Owning a Cyber Drop will
                  unlock monthly airdrops and future governance rights in
                  addition to our revolutionary axlorithm. We strive to always
                  bring innovation and keep BUILDing. Cyber Drops is a community
                  driven project and always will be that way. That’s our
                  promise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WeDo;
