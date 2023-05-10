import React, { useRef } from "react";
import Slider from "react-slick";
import varun from "../assets/img/webp/varun.webp";
import shubh from "../assets/img/webp/shubh.webp";
import leftArrow from "../assets/img/svg/Left-arrow.svg";
import rightArrow from "../assets/img/svg/Right-arrow.svg";
import umbrella from "../assets/img/svg/umbrella.svg";

function OurTeam() {
  const MySlider = useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-black py-5 position-relative mt-5">
        <span className="bg_shadow2 position-absolute"></span>
        <img
          className="position-absolute umbrella_img"
          src={umbrella}
          alt="arrow"
        />
        <div className="container position-relative">
          <img
            onClick={() => MySlider.current.slickPrev()}
            className="position-absolute mt-5 left_Arrow pe-3 pe-xl-0 d-none d-sm-flex"
            src={leftArrow}
            alt="arrow"
          />
          <img
            onClick={() => MySlider.current.slickNext()}
            className="position-absolute right_Arrow mt-5 ps-3 ps-xl-0 d-none d-sm-flex"
            src={rightArrow}
            alt="arrow"
          />
          <h2 className="ff_lato fw-bold text-white text-center fs_4x8l mb-0">
            Meet the <span className="text_primary">Team</span>
          </h2>
          <Slider
            ref={MySlider}
            className="p-0 position-relative mt-md-5 mt-4 pt-2 pb-4"
            {...settings}
          >
            <div className="h-100">
              <div
                style={{ borderRadius: "30px" }}
                className="row bg-white justify-content-center h-100 mx-3"
              >
                <div className="col-md-6 ps-md-0">
                  <div className="pt-3 pt-md-0 d-flex justify-content-center">
                    <img className="w-50 w_md_100" src={varun} alt="img" />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 px-lg-4">
                    <h2 className="ff_lato fw-bold text-black text-center fs_2x4l mb-0 pt-2 pt-md-0">
                      Varun Muthu
                    </h2>
                    <p className="ff_lato fw_medium text-black text-center fs_md pt-sm-2 mb-0">
                      Marketing Director
                    </p>
                    <a
                      className="ff_lato fw-normal fs_sm text-black text-center mt-xl-4 mt-sm-2 pt-1"
                      href="#"
                    >
                      https://www.linkedin.com/{" "}
                      <span className="d-block">in/varunmuthu1</span>
                    </a>
                    <span className="mt-md-4 py-3 py-md-0 d-flex gap-2">
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="24"
                          height="18"
                          viewBox="0 0 24 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.258 1.26797C9.07533 0.846834 8.86935 0.436198 8.641 0.0379736C8.63326 0.0243563 8.62155 0.0134234 8.60744 0.00663373C8.59332 -0.000155898 8.57747 -0.00247938 8.562 -2.64894e-05C6.848 0.289973 5.208 0.799974 3.677 1.49097C3.66383 1.4965 3.65266 1.50592 3.645 1.51797C0.533 6.09297 -0.32 10.555 0.099 14.961C0.100166 14.9718 0.103516 14.9822 0.108845 14.9917C0.114174 15.0011 0.121372 15.0094 0.13 15.016C1.94639 16.3384 3.97234 17.3458 6.123 17.996C6.13799 18.0006 6.15403 18.0006 6.16901 17.9959C6.184 17.9913 6.19724 17.9823 6.207 17.97C6.6698 17.351 7.0799 16.6944 7.433 16.007C7.4379 15.9976 7.44073 15.9872 7.44128 15.9766C7.44184 15.9661 7.44012 15.9555 7.43623 15.9456C7.43234 15.9358 7.42638 15.9268 7.41875 15.9195C7.41112 15.9121 7.402 15.9065 7.392 15.903C6.746 15.6597 6.12008 15.3661 5.52 15.025C5.50922 15.0188 5.50013 15.0101 5.49356 14.9995C5.48698 14.989 5.48313 14.977 5.48233 14.9646C5.48154 14.9522 5.48384 14.9398 5.48901 14.9286C5.49419 14.9173 5.50209 14.9075 5.512 14.9C5.638 14.807 5.764 14.71 5.884 14.613C5.8948 14.6043 5.90781 14.5987 5.92158 14.5969C5.93536 14.5952 5.94935 14.5973 5.962 14.603C9.889 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0174 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8924 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3414 1.50723 20.3304 1.49729 20.317 1.49197ZM8.02 12.278C6.838 12.278 5.863 11.209 5.863 9.89797C5.863 8.58597 6.819 7.51797 8.02 7.51797C9.23 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.221 12.278 8.02 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.643 2.93702C22.808 3.30702 21.911 3.55702 20.968 3.67002C21.941 3.08781 22.6689 2.17148 23.016 1.09202C22.1018 1.63501 21.1013 2.01721 20.058 2.22202C19.3564 1.47288 18.4271 0.976342 17.4143 0.80949C16.4016 0.642638 15.3621 0.814807 14.4572 1.29927C13.5524 1.78373 12.8328 2.55338 12.4102 3.48872C11.9875 4.42406 11.8855 5.47277 12.12 6.47202C10.2677 6.37901 8.45562 5.89757 6.80142 5.05892C5.14722 4.22028 3.68784 3.04318 2.518 1.60402C2.118 2.29402 1.888 3.09402 1.888 3.94602C1.88755 4.71301 2.07643 5.46826 2.43788 6.14475C2.79932 6.82124 3.32216 7.39805 3.96 7.82402C3.22027 7.80048 2.49687 7.6006 1.85 7.24102V7.30102C1.84992 8.37676 2.22203 9.41939 2.90318 10.252C3.58433 11.0846 4.53257 11.6559 5.587 11.869C4.90078 12.0547 4.18133 12.0821 3.483 11.949C3.78049 12.8746 4.35999 13.684 5.14036 14.2639C5.92074 14.8438 6.86291 15.1652 7.835 15.183C6.18483 16.4784 4.14688 17.1811 2.049 17.178C1.67738 17.1781 1.30607 17.1564 0.936996 17.113C3.06647 18.4822 5.54534 19.2088 8.077 19.206C16.647 19.206 21.332 12.108 21.332 5.95202C21.332 5.75202 21.327 5.55002 21.318 5.35002C22.2293 4.69099 23.0159 3.87491 23.641 2.94002L23.643 2.93702V2.93702Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM17 6.44609L16.0438 7.3625C15.9594 7.42578 15.9195 7.52891 15.9359 7.62969V14.3727C15.9195 14.4758 15.9594 14.5789 16.0438 14.6398L16.9813 15.5563V15.7602H12.275V15.5656L13.243 14.6258C13.3391 14.5297 13.3391 14.5016 13.3391 14.3586V8.90234L10.6437 15.7367H10.2805L7.14453 8.90234V13.4844C7.11641 13.6766 7.18437 13.8711 7.32031 14.0094L8.58125 15.5352V15.7391H5V15.5352L6.26094 14.0094C6.32737 13.9408 6.37681 13.8575 6.4053 13.7664C6.43379 13.6752 6.44054 13.5786 6.425 13.4844V8.1875C6.44141 8.03984 6.38516 7.89687 6.27266 7.79609L5.15234 6.44609V6.24219H8.63281L11.3187 12.1367L13.6836 6.24688H17V6.44609Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div
                style={{ borderRadius: "30px" }}
                className="row bg-white justify-content-center h-100 mx-3"
              >
                <div className="col-md-6 ps-md-0">
                  <div className="pt-3 pt-md-0 d-flex justify-content-center">
                    <img className="w-50 w_md_100" src={shubh} alt="img" />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 px-lg-4">
                    <h2 className="ff_lato fw-bold text-black text-center fs_2x4l mb-0 pt-2 pt-md-0">
                      Shubh Sharma
                    </h2>
                    <p className="ff_lato fw_medium text-black text-center fs_md pt-sm-2 mb-0">
                      Operations Director
                    </p>
                    <a
                      className="ff_lato fw-normal fs_sm text-black text-center mt-xl-4 mt-sm-2 pt-1"
                      href="#"
                    >
                      https://www.linkedin.com/{" "}
                      <span className="d-block">in/varunmuthu1</span>
                    </a>
                    <span className="mt-md-4 py-3 py-md-0 d-flex gap-2">
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="24"
                          height="18"
                          viewBox="0 0 24 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.258 1.26797C9.07533 0.846834 8.86935 0.436198 8.641 0.0379736C8.63326 0.0243563 8.62155 0.0134234 8.60744 0.00663373C8.59332 -0.000155898 8.57747 -0.00247938 8.562 -2.64894e-05C6.848 0.289973 5.208 0.799974 3.677 1.49097C3.66383 1.4965 3.65266 1.50592 3.645 1.51797C0.533 6.09297 -0.32 10.555 0.099 14.961C0.100166 14.9718 0.103516 14.9822 0.108845 14.9917C0.114174 15.0011 0.121372 15.0094 0.13 15.016C1.94639 16.3384 3.97234 17.3458 6.123 17.996C6.13799 18.0006 6.15403 18.0006 6.16901 17.9959C6.184 17.9913 6.19724 17.9823 6.207 17.97C6.6698 17.351 7.0799 16.6944 7.433 16.007C7.4379 15.9976 7.44073 15.9872 7.44128 15.9766C7.44184 15.9661 7.44012 15.9555 7.43623 15.9456C7.43234 15.9358 7.42638 15.9268 7.41875 15.9195C7.41112 15.9121 7.402 15.9065 7.392 15.903C6.746 15.6597 6.12008 15.3661 5.52 15.025C5.50922 15.0188 5.50013 15.0101 5.49356 14.9995C5.48698 14.989 5.48313 14.977 5.48233 14.9646C5.48154 14.9522 5.48384 14.9398 5.48901 14.9286C5.49419 14.9173 5.50209 14.9075 5.512 14.9C5.638 14.807 5.764 14.71 5.884 14.613C5.8948 14.6043 5.90781 14.5987 5.92158 14.5969C5.93536 14.5952 5.94935 14.5973 5.962 14.603C9.889 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0174 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8924 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3414 1.50723 20.3304 1.49729 20.317 1.49197ZM8.02 12.278C6.838 12.278 5.863 11.209 5.863 9.89797C5.863 8.58597 6.819 7.51797 8.02 7.51797C9.23 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.221 12.278 8.02 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.643 2.93702C22.808 3.30702 21.911 3.55702 20.968 3.67002C21.941 3.08781 22.6689 2.17148 23.016 1.09202C22.1018 1.63501 21.1013 2.01721 20.058 2.22202C19.3564 1.47288 18.4271 0.976342 17.4143 0.80949C16.4016 0.642638 15.3621 0.814807 14.4572 1.29927C13.5524 1.78373 12.8328 2.55338 12.4102 3.48872C11.9875 4.42406 11.8855 5.47277 12.12 6.47202C10.2677 6.37901 8.45562 5.89757 6.80142 5.05892C5.14722 4.22028 3.68784 3.04318 2.518 1.60402C2.118 2.29402 1.888 3.09402 1.888 3.94602C1.88755 4.71301 2.07643 5.46826 2.43788 6.14475C2.79932 6.82124 3.32216 7.39805 3.96 7.82402C3.22027 7.80048 2.49687 7.6006 1.85 7.24102V7.30102C1.84992 8.37676 2.22203 9.41939 2.90318 10.252C3.58433 11.0846 4.53257 11.6559 5.587 11.869C4.90078 12.0547 4.18133 12.0821 3.483 11.949C3.78049 12.8746 4.35999 13.684 5.14036 14.2639C5.92074 14.8438 6.86291 15.1652 7.835 15.183C6.18483 16.4784 4.14688 17.1811 2.049 17.178C1.67738 17.1781 1.30607 17.1564 0.936996 17.113C3.06647 18.4822 5.54534 19.2088 8.077 19.206C16.647 19.206 21.332 12.108 21.332 5.95202C21.332 5.75202 21.327 5.55002 21.318 5.35002C22.2293 4.69099 23.0159 3.87491 23.641 2.94002L23.643 2.93702V2.93702Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM17 6.44609L16.0438 7.3625C15.9594 7.42578 15.9195 7.52891 15.9359 7.62969V14.3727C15.9195 14.4758 15.9594 14.5789 16.0438 14.6398L16.9813 15.5563V15.7602H12.275V15.5656L13.243 14.6258C13.3391 14.5297 13.3391 14.5016 13.3391 14.3586V8.90234L10.6437 15.7367H10.2805L7.14453 8.90234V13.4844C7.11641 13.6766 7.18437 13.8711 7.32031 14.0094L8.58125 15.5352V15.7391H5V15.5352L6.26094 14.0094C6.32737 13.9408 6.37681 13.8575 6.4053 13.7664C6.43379 13.6752 6.44054 13.5786 6.425 13.4844V8.1875C6.44141 8.03984 6.38516 7.89687 6.27266 7.79609L5.15234 6.44609V6.24219H8.63281L11.3187 12.1367L13.6836 6.24688H17V6.44609Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100">
              <div
                style={{ borderRadius: "30px" }}
                className="row bg-white justify-content-center h-100 mx-3"
              >
                <div className="col-md-6 ps-md-0">
                  <div className="pt-3 pt-md-0 d-flex justify-content-center">
                    <img className="w-50 w_md_100" src={varun} alt="img" />
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 px-lg-4 pt-2 pt-md-0">
                    <h2 className="ff_lato fw-bold text-black text-center fs_2x4l mb-0">
                      Varun Muthu
                    </h2>
                    <p className="ff_lato fw_medium text-black text-center fs_md pt-sm-2 mb-0">
                      Marketing Director
                    </p>
                    <a
                      className="ff_lato fw-normal fs_sm text-black text-center mt-xl-4 mt-sm-2 pt-1"
                      href="#"
                    >
                      https://www.linkedin.com/{" "}
                      <span className="d-block">in/varunmuthu1</span>
                    </a>
                    <span className="mt-md-4 py-3 py-md-0 d-flex gap-2">
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="24"
                          height="18"
                          viewBox="0 0 24 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.258 1.26797C9.07533 0.846834 8.86935 0.436198 8.641 0.0379736C8.63326 0.0243563 8.62155 0.0134234 8.60744 0.00663373C8.59332 -0.000155898 8.57747 -0.00247938 8.562 -2.64894e-05C6.848 0.289973 5.208 0.799974 3.677 1.49097C3.66383 1.4965 3.65266 1.50592 3.645 1.51797C0.533 6.09297 -0.32 10.555 0.099 14.961C0.100166 14.9718 0.103516 14.9822 0.108845 14.9917C0.114174 15.0011 0.121372 15.0094 0.13 15.016C1.94639 16.3384 3.97234 17.3458 6.123 17.996C6.13799 18.0006 6.15403 18.0006 6.16901 17.9959C6.184 17.9913 6.19724 17.9823 6.207 17.97C6.6698 17.351 7.0799 16.6944 7.433 16.007C7.4379 15.9976 7.44073 15.9872 7.44128 15.9766C7.44184 15.9661 7.44012 15.9555 7.43623 15.9456C7.43234 15.9358 7.42638 15.9268 7.41875 15.9195C7.41112 15.9121 7.402 15.9065 7.392 15.903C6.746 15.6597 6.12008 15.3661 5.52 15.025C5.50922 15.0188 5.50013 15.0101 5.49356 14.9995C5.48698 14.989 5.48313 14.977 5.48233 14.9646C5.48154 14.9522 5.48384 14.9398 5.48901 14.9286C5.49419 14.9173 5.50209 14.9075 5.512 14.9C5.638 14.807 5.764 14.71 5.884 14.613C5.8948 14.6043 5.90781 14.5987 5.92158 14.5969C5.93536 14.5952 5.94935 14.5973 5.962 14.603C9.889 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0174 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8924 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3414 1.50723 20.3304 1.49729 20.317 1.49197ZM8.02 12.278C6.838 12.278 5.863 11.209 5.863 9.89797C5.863 8.58597 6.819 7.51797 8.02 7.51797C9.23 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.221 12.278 8.02 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.643 2.93702C22.808 3.30702 21.911 3.55702 20.968 3.67002C21.941 3.08781 22.6689 2.17148 23.016 1.09202C22.1018 1.63501 21.1013 2.01721 20.058 2.22202C19.3564 1.47288 18.4271 0.976342 17.4143 0.80949C16.4016 0.642638 15.3621 0.814807 14.4572 1.29927C13.5524 1.78373 12.8328 2.55338 12.4102 3.48872C11.9875 4.42406 11.8855 5.47277 12.12 6.47202C10.2677 6.37901 8.45562 5.89757 6.80142 5.05892C5.14722 4.22028 3.68784 3.04318 2.518 1.60402C2.118 2.29402 1.888 3.09402 1.888 3.94602C1.88755 4.71301 2.07643 5.46826 2.43788 6.14475C2.79932 6.82124 3.32216 7.39805 3.96 7.82402C3.22027 7.80048 2.49687 7.6006 1.85 7.24102V7.30102C1.84992 8.37676 2.22203 9.41939 2.90318 10.252C3.58433 11.0846 4.53257 11.6559 5.587 11.869C4.90078 12.0547 4.18133 12.0821 3.483 11.949C3.78049 12.8746 4.35999 13.684 5.14036 14.2639C5.92074 14.8438 6.86291 15.1652 7.835 15.183C6.18483 16.4784 4.14688 17.1811 2.049 17.178C1.67738 17.1781 1.30607 17.1564 0.936996 17.113C3.06647 18.4822 5.54534 19.2088 8.077 19.206C16.647 19.206 21.332 12.108 21.332 5.95202C21.332 5.75202 21.327 5.55002 21.318 5.35002C22.2293 4.69099 23.0159 3.87491 23.641 2.94002L23.643 2.93702V2.93702Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="fill-changer"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM17 6.44609L16.0438 7.3625C15.9594 7.42578 15.9195 7.52891 15.9359 7.62969V14.3727C15.9195 14.4758 15.9594 14.5789 16.0438 14.6398L16.9813 15.5563V15.7602H12.275V15.5656L13.243 14.6258C13.3391 14.5297 13.3391 14.5016 13.3391 14.3586V8.90234L10.6437 15.7367H10.2805L7.14453 8.90234V13.4844C7.11641 13.6766 7.18437 13.8711 7.32031 14.0094L8.58125 15.5352V15.7391H5V15.5352L6.26094 14.0094C6.32737 13.9408 6.37681 13.8575 6.4053 13.7664C6.43379 13.6752 6.44054 13.5786 6.425 13.4844V8.1875C6.44141 8.03984 6.38516 7.89687 6.27266 7.79609L5.15234 6.44609V6.24219H8.63281L11.3187 12.1367L13.6836 6.24688H17V6.44609Z"
                            fill="#F1AC73"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default OurTeam;
