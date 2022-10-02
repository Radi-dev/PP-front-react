export default function PartnerAndMedia() {
  return (
    <section className="media-wrapper ml-2 mr-2 d-none d-lg-block">
      <div className="container">
        <div id="media-bg" className="followers-bg mb-5">
          <h4 className="text-center mb-4">Partners & Media</h4>
          <div className="owl-carousel owl-theme" id="media_partner">
            <div className="item">
              <a href="#">
                <img
                  className="media-img"
                  src="/assets/images/media-img1.png"
                  alt="media-img1"
                />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img
                  className="media-img"
                  src="/assets/images/media-img2.png"
                  alt="media-img1"
                />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img
                  className="media-img"
                  src="/assets/images/media-img3.png"
                  alt="media-img1"
                />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img
                  className="media-img"
                  src="/assets/images/media-img1.png"
                  alt="media-img1"
                />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img
                  className="media-img"
                  src="/assets/images/media-img2.png"
                  alt="media-img1"
                />
              </a>
            </div>

            <div className="item">
              <a href="#">
                <img
                  className="media-img"
                  src="/assets/images/media-img3.png"
                  alt="media-img1"
                />
              </a>
            </div>
          </div>
          {/* <!-- <div id="mediaSlider" className="dvslider">
                        <div className="MS-content">
                            <div className="item">
                              <a href="#">  <img className="media-img" src="/assets/images/media-img1.png" alt="media-img1"> </a>
                            </div>
                            <div className="item">
                                <a href="#"> <img className="media-img" src="/assets/images/media-img2.png" alt="media-img1"> </a>
                            </div>
                            <div className="item">
                                <a href="#"> <img className="media-img" src="/assets/images/media-img3.png" alt="media-img1"> </a>
                            </div>
                        </div>
                    </div> --> */}
        </div>
      </div>
    </section>
  );
}
