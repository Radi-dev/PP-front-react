function App() {
  return (
    <section className="categoires_wrapper mt-3 mb-3 d-lg-block">
      <div className="container">
        <div id="categoires-bg">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6">
              <h4 className="heading">Categories</h4>
            </div>
            <div className="col-6 col-md-6 col-lg-6 text-right">
              <a href="#" className="text-uppercase brown-text viewall-btn">
                View All
              </a>
            </div>
          </div>
          <div id="folloersSlider" className="dvslider">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="followers-inner">
                  <a href="listing.html">
                    <img src="/src/assets/images/foodstuff-img.png" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="followers-inner">
                  <a href="listing.html">
                    <img src="/src/assets/images/packfood_img.png" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="followers-inner">
                  <a href="listing.html">
                    <img src="/src/assets/images/fruits-img.png" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="followers-inner">
                  <a href="listing.html">
                    <img src="/src/assets/images/packfood_img.png" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="followers-inner">
                  <a href="listing.html">
                    <img src="/src/assets/images/foodstuff-img.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
