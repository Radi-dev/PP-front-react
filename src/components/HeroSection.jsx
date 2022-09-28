export default function HeroSection() {
  return (
    <section className="hero_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 webhero-view">
            <div className="hero-content text-center">
              <a href="refer_earn.html">
                <div className="box-outline refer-bg">
                  <h6>Refer & Earn</h6>
                  <p>Invite a friend now</p>
                  <div className="home-list-img">
                    <img src="../assets/images/refer-money.svg" />
                  </div>
                </div>
              </a>
              <a href="make_list.html">
                <div className="box-outline mt-4 list-make-bg">
                  <h6>Make a list</h6>
                  <p>Shop faster now</p>
                  <div className="home-list-img">
                    <img src="../assets/images/list.svg" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div
              id="hero-sliderSlidesOnly"
              className="carousel slide home_slider"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#hero-sliderSlidesOnly"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-bs-target="#hero-sliderSlidesOnly"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#hero-sliderSlidesOnly"
                  data-bs-slide-to="2"
                ></li>
                <li
                  data-bs-target="#hero-sliderSlidesOnly"
                  data-bs-slide-to="3"
                ></li>
                <li
                  data-bs-target="#hero-sliderSlidesOnly"
                  data-bs-slide-to="4"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="../assets/images/slider1.jpg"
                    alt="slider1.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="../assets/images/slider2.jpg"
                    alt="slider2.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="../assets/images/slider1.jpg"
                    alt="slider1.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="../assets/images/slider2.jpg"
                    alt="slider2.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="../assets/images/slider1.jpg"
                    alt="slider1.jpg"
                  />
                </div>
              </div>
            </div>
            {/* <!-- <div id="hero-sliderSlidesOnly" className="carousel slide home_slider" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#hero-sliderIndicators" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#hero-sliderIndicators" data-bs-slide-to="1"></li>
                                <li data-bs-target="#hero-sliderIndicators" data-bs-slide-to="2"></li>
                                <li data-bs-target="#hero-sliderIndicators" data-bs-slide-to="3"></li>
                                <li data-bs-target="#hero-sliderIndicators" data-bs-slide-to="4"></li>
                                <li data-bs-target="#hero-sliderIndicators" data-bs-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="../assets/images/slider1.jpg" alt="slider1.jpg">
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../assets/images/slider2.jpg" alt="slider2.jpg">
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../assets/images/slider1.jpg" alt="slider1.jpg">
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../assets/images/slider2.jpg" alt="slider2.jpg">
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../assets/images/slider1.jpg" alt="slider1.jpg">
                                </div>
                            </div>
                        </div> --> */}
          </div>
          {/* <!-------- RESPOSNIVE-VIEW-START -------> */}
          <div className="col-md-12 col-lg-3 mobilehero-view">
            <div className="hero-content text-center">
              <div className="row">
                <div className="col-6 col-md-6">
                  <a href="refer_earn.html">
                    <div className="box-outline refer-bg">
                      <h6>Refer &amp; Earn</h6>
                      <p>Invite a friend now</p>
                      <div className="home-list-img">
                        <img src="../assets/images/refer-money.svg" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-6">
                  <a href="make_list.html">
                    <div className="box-outline mt-4 list-make-bg">
                      <h6>Make a list</h6>
                      <p>Shop faster now</p>
                      <div className="home-list-img">
                        <img src="../assets/images/list.svg" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-------- RESPOSNIVE-VIEW-END -------> */}
        </div>
      </div>
    </section>
  );
}
