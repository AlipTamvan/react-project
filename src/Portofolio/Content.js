export default function Content() {
  return (
    // Dekstop
    <>
      <div className="row">
        <div className="col-sm-5">
          <div className="content d-none d-lg-block ">
            <h2 className="mt-3">Full Stack Developer</h2>
            <h3 className="name">Muhammad Aliva Nurramadhan</h3>
            <hr className="col-sm-5 garis" color="white"></hr>
            <h5 className="text-justify">
              A freelancer who provides service for digital programming and
              design content needs, for all business with more than 4+
              Experience
            </h5>
          </div>
        </div>
        <div className="col-sm-5 text-center">
          <img
            src="./AlipTamvan.jpg"
            className="img-content d-none d-lg-block "
            width=""
            height="500"
            alt="Foto Alip"
          />
        </div>
        <div className="col-sm-2">
          <div className="content d-none d-lg-block text-end">
            <h5 className="mt-3 social-prove">Year Of Experience</h5>
            <h3 className="name d-none d-lg-block ">
              <b>4+</b>
            </h3>
          </div>

          <div className="content d-none d-lg-block text-end">
            <h5 className="mt-3 social-prove">Complete Project</h5>
            <h3 className="name d-none d-lg-block ">
              <b>30+</b>
            </h3>
          </div>

          <div className="content d-none d-lg-block text-end">
            <h5 className="mt-3 social-prove">Client</h5>
            <h3 className="name d-none d-lg-block ">
              <b>17</b>
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="row">
        <div className="col-sm-5">
          <div className="content-mobile d-sm-block d-md-none">
            <h2 className="mt-3">Full Stack Developer</h2>
            <h3 className="name">Muhammad Aliva Nurramadhan</h3>
            <hr className="col-sm-3 garis" color="white"></hr>
            <h5 className="text-justify">
              A freelancer who provides service for digital programming and
              design content needs, for all business with more than 4+
              Experience
            </h5>
          </div>
        </div>
        <div className="col-sm-5 text-center">
          <img
            src="./AlipTamvan.jpg"
            className="img-content-mobile d-sm-block d-md-none img-fluid"
            alt="Foto Alip"
          />
        </div>
        <div className="col-sm-2">
          <div className="container">
            <div className="row">
              <div className="col-4 text-center">
                <div className="content-mobile  d-sm-block d-md-none">
                  <h5 className="mt-3 social-prove">Year Of Experience</h5>
                  <h3 className="name  d-sm-block d-md-none ">
                    <b>4+</b>
                  </h3>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="content-mobile  d-sm-block d-md-none ">
                  <h5 className="mt-3 social-prove">Complete Project</h5>
                  <h3 className="name  d-sm-block d-md-none">
                    <b>30+</b>
                  </h3>
                </div>
              </div>

              <div className="col-4 text-center">
                <div className="content-mobile  d-sm-block d-md-none">
                  <h5 className="mt-3 social-prove">Client</h5>
                  <h3 className="name  d-sm-block d-md-none">
                    <b>17</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ipad */}
      <div className="row">
        <div className="col-sm-5">
          <div className="content-ipad  d-none d-md-block d-lg-none">
            <h2 className="mt-3">Full Stack Developer</h2>
            <h3 className="name">Muhammad Aliva Nurramadhan</h3>
            <hr className="col-sm-5 garis" color="white"></hr>
            <h5 className="text-justify">
              A freelancer who provides service for digital programming and
              design content needs, for all business with more than 4+
              Experience
            </h5>
          </div>
        </div>
        <div className="col-sm-5 text-center">
          <img
            src="./AlipTamvan.jpg"
            className="img-content-ipad  d-none d-md-block d-lg-none img-fluid"
            alt="Foto Alip"
          />
        </div>
        <div className="col-sm-2">
          <div className="content-ipad d-none d-md-block d-lg-none text-end">
            <h5 className="mt-3 social-prove">Year Of Experience</h5>
            <h3 className="name d-none d-md-block d-lg-none">
              <b>4+</b>
            </h3>
          </div>

          <div className="content-ipad d-none d-md-block d-lg-none text-end">
            <h5 className="mt-3 social-prove">Complete Project</h5>
            <h3 className="name d-none d-md-block d-lg-none">
              <b>30+</b>
            </h3>
          </div>

          <div className="content-ipad      d-none d-md-block d-lg-none text-end">
            <h5 className="mt-3 social-prove">Client</h5>
            <h3 className="name d-none d-md-block d-lg-none ">
              <b>17</b>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
