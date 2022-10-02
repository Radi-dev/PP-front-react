function DownloadAddSection() {
  return (
    <section className="download-wrapper ml-2 mr-2 d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="download-content">
              <h3>Download the New Pricepally Mobile App</h3>
              <ul className="list-unstyled">
                <li className="d-inline-block">
                  <a href="#">
                    <img src="/assets/images/appstore.png" alt="appstore" />
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="#">
                    <img src="/assets/images/playstore.png" alt="appstore" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="download-img">
              <img
                src="/assets/images/download_mobile.png"
                alt="download-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DownloadAddSection;
