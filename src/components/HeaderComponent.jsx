export default function HeaderComponent() {
  return (
    <div className="desktop-header">
      <header>
        <div className="navigation-wrap start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-4 col-sm-5 col-md-5">
                <ul className="list-unstyled mb-0">
                  <li className="d-inline-block">
                    <a
                      className="navbar-brand"
                      href="index.html"
                      target="_blank"
                    >
                      <img src="/src/assets/images/logo.svg" width="40px" />
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <div className="search-container">
                      <form>
                        <div className="outer_search">
                          <div className="saerch-bar" id="search_bars">
                            <span className="material-icons"> search </span>
                            <input
                              type="text"
                              placeholder="Search Food Items or Users"
                              name="search"
                            />
                          </div>
                          <button className="yellow-bg">SEARCH</button>
                        </div>
                        <div className="search-dropdown" id="scrolling">
                          <div className="search-items">
                            <h6 className="grey-text">FOOD ITEMS</h6>
                            <ul className="list-unstyled mb-3">
                              <li className="d-inline-block">
                                <img
                                  className="seaarch-img"
                                  src="/src/assets/images/search-img1.jpg"
                                  alt="search-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <h5>Tuwo Rice (25kg)</h5>
                              </li>
                            </ul>
                            <ul className="list-unstyled mb-3">
                              <li className="d-inline-block">
                                <img
                                  className="seaarch-img"
                                  src="/src/assets/images/search-img2.jpg"
                                  alt="search-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <h5>Tuwo Rice (50kg)</h5>
                              </li>
                            </ul>
                            <ul className="list-unstyled mb-3">
                              <li className="d-inline-block">
                                <img
                                  className="seaarch-img"
                                  src="/src/assets/images/search-img1.jpg"
                                  alt="search-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <h5>Tuwo Rice (25kg)</h5>
                              </li>
                            </ul>
                          </div>
                          <div className="search-users">
                            <h6 className="grey-text">Users</h6>

                            <ul className="list-unstyled mb-3">
                              <li className="d-inline-block">
                                <img
                                  className="seaarch-list"
                                  src="/src/assets/images/list-img1.jpg"
                                  alt="search-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <h5>Tumininu Tayo</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-8 col-sm-7 col-md-7">
                <nav className="navbar navbar-expand-md navbar-light float-right text-center">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent "
                  >
                    <ul className="navbar-nav drop-menu">
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link active" href="index.html ">
                          <p className="mb-0">
                            <i className="material-icons-outlined">home</i>
                            {/* <!-- <i className="fas fa-home"></i> --> */}
                          </p>
                          <p className="mb-0">Home</p>
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="# ">
                          <p className="mb-0">
                            {/* <!-- <i className="fas fa-users"></i> --> */}
                            <span className="material-icons">
                              {" "}
                              people_outline{" "}
                            </span>
                          </p>
                          <p className="mb-0">Users</p>
                        </a>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="# ">
                          <p className="mb-0">
                            {/* <!-- <i className="fas fa-shopping-cart"></i> --> */}
                            <span className="material-icons-outlined">
                              shopping_cart
                            </span>
                          </p>
                          <p className="mb-0">Cart</p>
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="# ">
                          <p className="mb-0">
                            {/* <!-- <i className="fas fa-shopping-bag"></i> --> */}
                            <span className="material-icons-outlined">
                              shopping_bag
                            </span>
                          </p>
                          <p className="mb-0">Order</p>
                        </a>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a href="#" className="nav-link">
                          <p className="mb-0">
                            <span className="material-icons"> more_horiz </span>
                          </p>
                          <p className="mb-0">
                            More <span className="toggle"></span>
                          </p>
                        </a>
                        <ul className="dropdown p-0 nav-clr">
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons">
                                account_balance_wallet
                              </span>
                              Wallet
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons">
                                {" "}
                                notifications
                              </span>
                              Notifications
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons"> share </span>{" "}
                              Refer and Earn
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons">
                                {" "}
                                favorite_border{" "}
                              </span>
                              Saved Products
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons">
                                {" "}
                                error_outline{" "}
                              </span>
                              Frequently Asked Questions
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons">
                                {" "}
                                settings_cell{" "}
                              </span>
                              Contact Admin
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons">
                                {" "}
                                location_city{" "}
                              </span>
                              Change City
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a href="#" className="nav-link">
                          <p className="mb-0">
                            <span className="material-icons">
                              {" "}
                              account_circle{" "}
                            </span>
                          </p>
                          <p className="mb-0">
                            My Account <span className="toggle"></span>
                          </p>
                        </a>
                        <ul className="dropdown p-0 nav-clr">
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons-outlined">
                                account_circle
                              </span>
                              Profile
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons-outlined">
                                location_on
                              </span>
                              Manage Address
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons-outlined">
                                {" "}
                                lock{" "}
                              </span>
                              Change Password
                            </a>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0">
                            <a href="#" className="nav-link">
                              <span className="material-icons-outlined">
                                {" "}
                                login{" "}
                              </span>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export function HeaderComponentMobile() {
  return (
    <section className="mobile-header">
      <div className="container">
        <div className="d-flex mb-3">
          <div className="justify-content-start">
            <img
              className="mobile-logo"
              src="/src/assets/images/main-logo.svg"
              alt="mobile-logo"
            />
          </div>
          <div className="ml-auto justify-content-end">
            <img
              className="profile-img"
              src="/src/assets/images/profile_img.jpg"
              alt="profile-img"
            />
          </div>
        </div>
      </div>
      <div className="mobile-search">
        <div className="container">
          <div
            className="search-container"
            data-toggle="modal"
            data-target="#search-modal"
          >
            <form>
              <div className="saerch-bar">
                <div>
                  <span className="material-icons"> search </span>
                  <input type="text" placeholder="Search " name="search" />
                </div>
                {/* <!-- <button className="yellow-bg">SEARCH</button> --> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
