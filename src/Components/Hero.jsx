import React from "react";
import heroImg from "../assets/img/webp/hero-img.webp";
import Header from "./Header";

function Hero() {
  return (
    <section className="min_vh_100 d-flex flex-column position-relative">
      <span className="bg_shadow position-absolute mb-5 moving_animation1"></span>
      <div style={{ zIndex: "122" }}>
        <Header />
      </div>
      <div className="container flex-grow-1 d-flex align-items-center py-5">
        <div className="row align-items-center ">
          <div className="col-md-7">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-offset="200"
              className=""
            >
              <h1 className="ff_lato fw_extrabold fs_7x2l text-white mb-0">
                Welcome to{" "}
                <span className="text_primary d-lg-block">Cyber Drops</span>
              </h1>
              <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-lg-4 mt-2 pt-1 pb-lg-3">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus,{" "}
                <span className="d-lg-block">
                  enim tincidunt at nibh duis iaculis in mauris. Id elit nec
                  curabitur
                </span>{" "}
                purus. Ullamcorper mattis risus suspendisse pretium tristique.
              </p>

              <a
                class="ff_lato fw_medium fs_sm text-white z_index text_stroke mt-lg-5 mt-4 d-inline-block bottom_line explore_btn"
                href="#about"
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-sm-5 mt-4 mt-md-0">
            <div className="d-flex justify-content-center">
              <img
                className="img-size moving_animation  "
                src={heroImg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
