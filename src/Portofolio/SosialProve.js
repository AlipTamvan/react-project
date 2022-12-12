export default function SosialProve() {
  return (
    <>
      {/* //Dekstop */}
      <div className="b-sosial-prove d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./Logo-MongoDb.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
            <div className="col-sm-3 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./Logo-Express.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
            <div className="col-sm-3 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./logo192.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
            <div className="col-sm-3 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./Node-js.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile*/}
      <div className="b-sosial-prove-mobile d-sm-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="swiffy-slider">
              <ul className="slider-container">
                <div className="text-center">
                  <button className="new-btn new-btn-black m-3">
                    <img
                      src="./Logo-MongoDb.png"
                      width="auto"
                      height="112"
                      alt="React Logo"
                    />
                  </button>
                </div>
                <div className=" text-center">
                  <button className="new-btn new-btn-black m-3">
                    <img
                      src="./Logo-Express.png"
                      width="auto"
                      height="112"
                      alt="React Logo"
                    />
                  </button>
                </div>
                <div className=" text-center">
                  <button className="new-btn new-btn-black m-3">
                    <img
                      src="./logo192.png"
                      width="auto"
                      height="112"
                      alt="React Logo"
                    />
                  </button>
                </div>
                <div className=" text-center">
                  <button className="new-btn new-btn-black m-3">
                    <img
                      src="./Node-js.png"
                      width="auto"
                      height="112"
                      alt="React Logo"
                    />
                  </button>
                </div>
              </ul>
              <button type="button" className="slider-nav"></button>
              <button
                type="button"
                className="slider-nav slider-nav-next"
              ></button>
              <div className="slider-indicators">
                <button className="active"></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ipad */}
      <div className="b-sosial-prove d-none d-md-block d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./Logo-MongoDb.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
            <div className="col-4 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./Logo-Express.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
            <div className="col-4 text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./logo192.png"
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
            <div className="col-4 mx-auto text-center">
              <button className="new-btn new-btn-black m-3">
                <img
                  src="./Node-js.png"
                  className=""
                  width="auto"
                  height="112"
                  alt="React Logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
