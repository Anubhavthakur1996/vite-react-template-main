import { JSX } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/slices/baseSlice";
import HolidayForm from "./HolidayForm";

const FormModal: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { modal, mobile } = useSelector((state) => state.base);

  return (
    <Modal
      width={900}
      open={modal}
      footer={null}
      onCancel={() => dispatch(toggleModal())}
    >
      <div className="flex justify-evenly">
        {!mobile && (
          <div className="col-lg-5 col-md-12 col-12">
            <div className="left_modal_txt">
              <h3>How we work ?</h3>
              {/* <!--  --> */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="assets/images/icon1.png"
                    alt="..."
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <b>Tell us details of your holiday plan</b>
                </div>
              </div>
              {/* <!--  --> */}

              {/* <!--  --> */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="assets/images/icon2.png"
                    alt="..."
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <b>
                    Get multiple quotes from certified agent, compare &amp;
                    customize further.
                  </b>
                </div>
              </div>
              {/* <!--  --> */}

              {/* <!--  --> */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="assets/images/icon3.png"
                    alt="..."
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <b>Select &amp; book best deal</b>
                </div>
              </div>
              {/* <!--  --> */}

              {/* <!-- row nested --> */}
              <div className="row">
                {/* <!-- col nested --> */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-4">
                  <div className="nested_img">
                    <img
                      src="assets/images/popico1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <p>
                      <b>Certified Agent</b>
                    </p>
                  </div>
                </div>
                {/* <!-- col nested end--> */}

                {/* <!-- col nested --> */}
                <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-4 col-4">
                  <div className="nested_img">
                    <img
                      src="assets/images/popico2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <p>
                      <b>100% Secure</b>
                    </p>
                  </div>
                </div>
                {/* <!-- col nested end--> */}

                {/* <!-- col nested --> */}
                <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-4 col-4">
                  <div className="nested_img">
                    <img
                      src="assets/images/popico3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <p>
                      <b>Stringent Quality Control</b>
                    </p>
                  </div>
                </div>
                {/* <!-- col nested end--> */}
              </div>
              {/* <!-- row nested end -->
                                <!-- call us head--> */}
              <div className="call_us_hd">
                <h4>Call us for Details</h4>
                <a href="tel:+91- 7087875272">
                  {" "}
                  <span className="fa fa-phone"></span> +91- 7087875272
                </a>
              </div>
              {/* <!--  --> */}
            </div>
          </div>
        )}

        <HolidayForm formTitle="fill form to get Qoute" />
      </div>
    </Modal>
  );
};

export default FormModal;
