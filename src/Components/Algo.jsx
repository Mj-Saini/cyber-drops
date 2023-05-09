import React from "react";
import algo1 from "../assets/img/webp/Algo-1.webp";
import algo2 from "../assets/img/webp/algo-2.webp";
import algo3 from "../assets/img/webp/algo-3.webp";

function Algo() {
  return (
    <>
      <section className="py-4 py-md-5 position-relative">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="pe-lg-4"
              >
                <h2 className="ff_lato fw-bold fs_4x8l text-white mb-0">
                  Our <span className="text_primary"> Algo</span>
                </h2>
                <p className="ff_lato fw-normal fs_md text-white mb-0 mt-sm-3 mt-2 pt-1">
                  We have perfected our algorithm, which prioritizes a low risk
                  and consistent profit stream without the need for daily
                  micromanagement. While most trading algorithms can’t stand up
                  against a volatile or risky market, our algorithm thrives in
                  those conditions. Early-stage testers have seen a consistent
                  flow of income with minimal ups and downs. Our algorithm has
                  been in the works for YEARS. This has given us the time to
                  rigorously backtest and release any needed hotfixes. As of
                  early March 2022, we have close to a quarter of a million
                  under direct management!
                </p>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="row align-items-center"
              >
                <div className="col-5">
                  <div className="d-flex flex-column gap-3">
                    {" "}
                    <img className="w-100" src={algo1} alt="algo-img" />
                  </div>
                  <div className="mt-3 ">
                    {" "}
                    <img className="w-100" src={algo2} alt="algo-img" />
                  </div>
                </div>
                <div className="col-7">
                  <div className="d-flex justify-content-center align-items-center">
                    {" "}
                    <img className="w-100" src={algo3} alt="algo-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Algo;
