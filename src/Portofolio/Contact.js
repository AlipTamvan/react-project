// import env from "react-dotenv";
export default function Contact() {
  return (
    <>
      {/* Dekstop */}
      <div className="container b-contact d-none d-lg-block " id="contact">
        {/* Desktop */}
        <span className="relative  d-none d-lg-block ">
          <span className="absolute d-none d-lg-block "></span>
        </span>

        {/* Mobile */}
        <span className="relative d-sm-block d-md-none">
          <span className="absolute-mobile d-sm-block d-md-none"></span>
        </span>

        {/* Ipad */}
        <span className="relative d-none d-md-block d-lg-none">
          <span className="absolute-ipad d-none d-md-block d-lg-none"></span>
        </span>

        <div className="row  justify-content-center">
          <div className="col-sm-4 contact">
            <h1 className="text-center">Contact Me</h1>
            <form
              //With react-env
              // action={"https://formsubmit.co/" + env.EMAIL}

              //Normal
              // action="https://formsubmit.co/alivanurramadhan@gmail.com"
              //Random String
              action="https://formsubmit.co/3ee373e4d005afcb04e5dea39ff547a2"
              method="POST"
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>

                <input
                  type="email"
                  required
                  name="Email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Text Me Here
                </label>
                <textarea
                  name="Message"
                  required
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="container b-contact-mobile d-sm-block d-md-none"
        id="contact-mobile"
      >
        {/* Desktop */}
        <span className="relative  d-none d-lg-block ">
          <span className="absolute d-none d-lg-block "></span>
        </span>

        {/* Mobile */}
        <span className="relative d-sm-block d-md-none">
          <span className="absolute-mobile d-sm-block d-md-none"></span>
        </span>

        {/* Ipad */}
        <span className="relative d-none d-md-block d-lg-none">
          <span className="absolute-ipad d-none d-md-block d-lg-none"></span>
        </span>

        <div className="row  justify-content-center">
          <div className="col-sm-4 contact">
            <h1 className="text-center">Contact Me</h1>
            <form
              //With react-env
              // action={"https://formsubmit.co/" + env.EMAIL}

              //Normal
              // action="https://formsubmit.co/alivanurramadhan@gmail.com"
              //Random String
              action="https://formsubmit.co/3ee373e4d005afcb04e5dea39ff547a2"
              method="POST"
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>

                <input
                  type="email"
                  required
                  name="Email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Text Me Here
                </label>
                <textarea
                  name="Message"
                  required
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Ipad */}
      <div className="container b-contact d-none d-md-block d-lg-none">
        {/* Desktop */}
        <span className="relative  d-none d-lg-block ">
          <span className="absolute d-none d-lg-block "></span>
        </span>

        {/* Mobile */}
        <span className="relative d-sm-block d-md-none">
          <span className="absolute-mobile d-sm-block d-md-none"></span>
        </span>

        {/* Ipad */}
        <span className="relative d-none d-md-block d-lg-none">
          <span className="absolute-ipad d-none d-md-block d-lg-none"></span>
        </span>

        <div className="row  justify-content-center">
          <div className="col-sm-4 contact">
            <h1 className="text-center">Contact Me</h1>
            <form
              //With react-env
              // action={"https://formsubmit.co/" + env.EMAIL}

              //Normal
              // action="https://formsubmit.co/alivanurramadhan@gmail.com"
              //Random String
              action="https://formsubmit.co/3ee373e4d005afcb04e5dea39ff547a2"
              method="POST"
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>

                <input
                  type="email"
                  required
                  name="Email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Text Me Here
                </label>
                <textarea
                  name="Message"
                  required
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
