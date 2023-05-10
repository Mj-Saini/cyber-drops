import React from "react";
import playbit from "../assets/img/svg/playbit.svg";
import Number24 from "../assets/img/svg/number-24.svg";
import hive from "../assets/img/svg/hive.svg";
import focuss from "../assets/img/svg/focus.svg";

function Partners() {
  return (
    <>
      <section className="Partners_bg_img pb-5 my-lg-5 position-relative">
        <span className="bg_shadow position-absolute top-50 mt-5 moving_animation1"></span>
        <div className="container pt-lg-5 mt-4">
          <h2 className=" ff_lato fw-bold fs_4x8l text_White text-center mb_custom  pb-4 mb-5">
            Part<span className=" text_primary">ners</span>
          </h2>
          <div class="parents_main my-4 my-xl-0 ">
            <div class="icons d-flex gap-sm-5 gap-2 px-3 align-items-center">
              <div className="d-flex flex-column align-items-center">
                <img className="w-100 w_xsm_75" src={playbit} alt="img-logo" />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center mx-auto">
                  Playbit
                </h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img className="w-100 w_xsm_75" src={Number24} alt="img-logo" />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center">
                  24 Capital
                </h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img className="w-100 w_xsm_75" src={hive} alt="img-logo" />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center">
                  TradingHive
                </h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="custom_height w_xsm_75"
                  src={focuss}
                  alt="img-logo"
                />
                <h3 className="pt-4 ff_lato fw-bold fs_md text-center">
                  Focus Group Equities
                </h3>
              </div>
            </div>
            <div class="icons d-flex gap-sm-5 gap-3 align-items-center ms-auto">
              <div className=" d-flex flex-column align-items-center">
                <img className="w-100 w_xsm_75" src={playbit} alt="img-logo" />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center">
                  Playbit
                </h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img className="w-100 w_xsm_75" src={Number24} alt="img-logo" />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center">
                  24 Capital
                </h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img className="w-100 w_xsm_75" src={hive} alt="img-logo" />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center">
                  TradingHive
                </h3>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img
                  style={{ height: "" }}
                  className="custom_height w_xsm_75"
                  src={focuss}
                  alt="img-logo"
                />
                <h3 className="pt-4 ff_lato fs_md fw-bold text-center">
                  Focus Group Equities
                </h3>
              </div>
            </div>
          </div>
          <p className="ff_lato fw-bold fs_md text_primary text-center mb-0 mt_custom">
            For business and collaborations, contact us team@cyberdrops.finance
          </p>
        </div>
      </section>
    </>
  );
}

export default Partners;
