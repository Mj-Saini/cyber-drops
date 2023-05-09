import React from "react";
import lineDot from "../assets/img/svg/dot-line.svg";
import img1 from "../assets/img/svg/roadmap1.svg";
import img2 from "../assets/img/svg/img2.svg";
import img3 from "../assets/img/svg/im3.svg";
import img4 from "../assets/img/svg/im4.svg";
import img5 from "../assets/img/svg/im5.svg";
import img6 from "../assets/img/svg/img6.svg";
import img7 from "../assets/img/svg/img5.svg";
import img8 from "../assets/img/svg/img7.svg";
import perasute from "../assets/img/svg/perasute.svg";
import umbrella from "../assets/img/svg/umbrella.svg";
import perasute1 from "../assets/img/svg/seven-color.svg";

function RoadMap() {
  return (
    <>
      <section
        id="RoadMap"
        className="py-5 RoadMap_bg_img position-relative mt-lg-5"
      >
        <div
          style={{ zIndex: "0" }}
          className="roadmap_gradient position-absolute"
        ></div>
        <img
          className="position-absolute moving_animation perasute1_position d-none d-sm-flex"
          src={umbrella}
          alt="arrow"
        />

        <img
          className="perasute_in_roadmap moving_animation position-absolute d-none d-sm-flex"
          src={perasute}
          alt="img"
        />
        <img
          style={{ zIndex: "1" }}
          className="bottom-0 perasute2_position moving_animation end-0 position-absolute d-none d-sm-flex"
          src={perasute1}
          alt="img"
        />
        <div className="container pt-4">
          <h2
            style={{ zIndex: "12", position: "relative" }}
            className="ff_lato fw-bold fs_4x8l text-center text-white mb-0 pb-sm-4"
          >
            Road<span className="text_primary">Map</span>
          </h2>
          <div className="row mt-4 pt-sm-3">
            <div className="col-md-6"></div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img1}
                  alt="img"
                />
                <div className="w-75 ps-5 position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    March 2022
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3 ">
            <div className="col-md-6 d-none d-md-flex">
              <div className="d-flex w-100 dased_line_along_col_left position-relative  py-4">
                <img
                  className="roadmap_center_icon_left position-absolute"
                  src={img2}
                  alt="img"
                />
                <div className="w-75 pe-5 position-relative">
                  <img
                    className="dot_line_left position-absolute"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato text-end fw-semibold fs_2x4l text-white">
                    March 2022
                  </h2>
                  <p className="ff_lato fw-normal text-end fs_sm text-white">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-none">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img1}
                  alt="img"
                />
                <div className="w-75 ps-md-4 ps-5  position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    March 2022
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3">
            <div className="col-md-6"></div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img3}
                  alt="img"
                />
                <div className="w-75 ps-5 position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    March 2022
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3 ">
            <div className="col-md-6 d-none d-md-flex">
              <div className="d-flex w-100 dased_line_along_col_left position-relative  py-4">
                <img
                  className="roadmap_center_icon_left position-absolute"
                  src={img4}
                  alt="img"
                />
                <div className="w-75 pe-5 position-relative">
                  <img
                    className="dot_line_left position-absolute"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato text-end fw-semibold fs_2x4l text-white">
                    April 2022
                  </h2>
                  <p className="ff_lato fw-normal text-end fs_sm text-white">
                    Our First Airdrop
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-none">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img1}
                  alt="img"
                />
                <div className="w-75 ps-md-4 ps-5  position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    April 2022
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    Our First Airdrop
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3">
            <div className="col-md-6"></div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img5}
                  alt="img"
                />
                <div className="w-75 ps-5 position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    June 2022
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    Major Collabs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3 ">
            <div className="col-md-6 d-none d-md-flex">
              <div className="d-flex w-100 dased_line_along_col_left position-relative  py-4">
                <img
                  className="roadmap_center_icon_left position-absolute"
                  src={img6}
                  alt="img"
                />
                <div className="w-75 pe-5 position-relative">
                  <img
                    className="dot_line_left position-absolute"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato text-end fw-semibold fs_2x4l text-white">
                    Sometime in Q3
                  </h2>
                  <p className="ff_lato fw-normal text-end fs_sm text-white">
                    Cyber Celebs come on Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-none">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img1}
                  alt="img"
                />
                <div className="w-75 ps-md-4 ps-5  position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    Sometime in Q3
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    Cyber Celebs come on Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3">
            <div className="col-md-6"></div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-md-end justify-content-center dased_line_along_col position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img5}
                  alt="img"
                />
                <div className="w-75 ps-5 position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    Sometime in Q3
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    Streetwear + Merch
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-4 pt-xl-3 ">
            <div className="col-md-6 d-none d-md-flex">
              <div className="d-flex w-100 position-relative  py-4">
                <img
                  className="roadmap_center_icon_left position-absolute"
                  src={img7}
                  alt="img"
                />
                <div className="w-75 pe-5 position-relative">
                  <img
                    className="dot_line_left position-absolute"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato text-end fw-semibold fs_2x4l text-white">
                    Sometime in Q3
                  </h2>
                  <p className="ff_lato fw-normal text-end fs_sm text-white">
                    Streetwear + Merch
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-none">
              <div className="d-flex justify-content-md-end justify-content-center position-relative py-4">
                <img
                  className="roadmap_center_icon position-absolute"
                  src={img7}
                  alt="img"
                />
                <div className="w-75 ps-md-4 ps-5  position-relative">
                  <img
                    className="dot_line position-absolute d-md-flex d-none"
                    src={lineDot}
                    alt="line-dot"
                  />
                  <h2 className="ff_lato fw-semibold fs_2x4l text-white">
                    Sometime in Q4
                  </h2>
                  <p className="ff_lato fw-normal fs_sm text-white">
                    Enhanced Partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ zIndex: "0", rotate: "180deg" }}
          className="roadmap_gradient_bottom position-absolute"
        ></div>
      </section>
    </>
  );
}

export default RoadMap;
