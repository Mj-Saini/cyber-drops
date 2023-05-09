import React from "react";
import { Accordion } from "react-bootstrap";
import umbrella from "../assets/img/svg/chata-img.svg";

function Faq() {
  return (
    <>
      <section id="FAQ" className="py-5 position-relative">
        <span className="bg_shadow2 position-absolute moving_animation1"></span>
        <img
          className="position-absolute Faq_umbrell w_umbrela_width d-none d-md-flex"
          src={umbrella}
          alt="arrow"
        />
        <h2 className="ff_lato fw-bold fs_4x8l text_primary text-center">
          FAQ<span className="text-white">'s</span>
        </h2>
        <div className="container pt-lg-5">
          <div className="row">
            <div className="col-md-9 mx-auto mt-4">
              <div>
                <Accordion className="Faq_accordion" defaultActiveKey="0" flush>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className=" Accordion_items position-relative py-4"
                    eventKey="0"
                  >
                    <Accordion.Header className="accordion_Header">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        {" "}
                        Egestas scelerisque duis quis aliquet. Consectetur?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        {" "}
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          {" "}
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordion_items position-relative mt-4 py-4"
                    eventKey="1"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        {" "}
                        Ac nec enim amet, leo lorem quis neque vitae aliquet?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        {" "}
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          {" "}
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordion_items position-relative mt-4 py-4"
                    eventKey="3"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        {" "}
                        Sit laoreet nibh sit hac potenti. Non ullamcorper fames
                        nibh donec?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        {" "}
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          {" "}
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordion_items position-relative mt-4 py-4"
                    eventKey="4"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Porta amet tortor nec pulvinar urna. Et blandit sit id?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        {" "}
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          {" "}
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="Accordion_items position-relative mt-4 py-4"
                    eventKey="5"
                  >
                    <Accordion.Header className="Accordion_Body">
                      <h2 className="ff_lato fw_medium fs_xl text-white mb-0">
                        Tellus hendrerit fermentum ut hendrerit ac vestibulum?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body className="Accordion_Body">
                      <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-1">
                        {" "}
                        Viverra metus viverra rhoncus eget quam suspendisse diam
                        amet, nisl. Mattis maecenas
                        <span className=" d-lg-block">
                          {" "}
                          libero lacinia accumsan amet. Quam quam egestas
                          feugiat amet. Ut nibh vulputate.
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
