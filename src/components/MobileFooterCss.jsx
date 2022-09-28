export default function MobileFooter() {
  return (
    <footer className="d-block d-lg-none mobile-footer">
      <div className="container">
        <div className="d-flex text-center justify-content-center">
          <div className="mobile-icon">
            <a className="nav-link active" href="index.html">
              <p className="mb-0">
                <i className="material-icons-outlined">home</i>
              </p>
              <p className="mb-0">Home</p>
            </a>
          </div>
          <div className="mobile-icon">
            <a className="nav-link" href="my_account_profile.html">
              <p className="mb-0">
                <span className="material-icons"> people_outline </span>
              </p>
              <p className="mb-0">Users</p>
            </a>
          </div>
          <div className="mobile-icon">
            <a className="nav-link" href="cart.html">
              <p className="mb-0">
                <span className="material-icons-outlined"> shopping_cart </span>
              </p>
              <p className="mb-0">Cart</p>
            </a>
          </div>
          <div className="mobile-icon">
            <a className="nav-link" href="orders.html">
              <p className="mb-0">
                <span className="material-icons-outlined"> shopping_bag </span>
              </p>
              <p className="mb-0">Orders</p>
            </a>
          </div>
          <div className="mobile-icon">
            <a href="more.html" className="nav-link">
              <p className="mb-0 more_ic">
                <span className="material-icons"> more_horiz </span>
              </p>
              <p className="mb-0">More</p>
              <span className="yellow_cir float-right">2</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function MobileFooter2() {
  return (
    <div id="moreModal-wrapper">
      <div className="container">
        <div className="moremodal-bg">
          <div className="moremodal-header">
            <div className="container">
              <div className="d-flex">
                <div className="w-50 justify-content-start">
                  <div className="p-1">
                    <h5 className="mb-0 morehead">₦GN 24,500</h5>
                    <p className="mb-0 more-phr">Wallet Balance</p>
                  </div>
                  <hr className="more-border" />
                  <div className="p-1">
                    <h6 className="mb-0 morehead">₦GN 1,000</h6>
                    <p className="mb-0 more-phr">Pending Balance</p>
                  </div>
                </div>
                <div className="ml-auto justify-content-end align-self-center">
                  <a href="#">
                    <button className="yellow-bg text-uppercase">
                      Go to wallet
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <ul className="list-unstyled">
              <li className="more-outline mb-3">
                <a href="make_list.html">
                  <span className="material-icons-round align-middle">
                    format_list_bulleted
                  </span>
                  <span className="morelist-text pl-2">Make a List</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="my_account_profile.html">
                  <span className="material-icons-outlined align-middle">
                    account_circle
                  </span>
                  <span className="morelist-text pl-2">Profile</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="refer_earn.html">
                  <span className="material-icons align-middle"> share </span>
                  <span className="morelist-text pl-2">Refer and Earn</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="saved-products.html">
                  <span className="material-icons align-middle">
                    favorite_border
                  </span>
                  <span className="morelist-text pl-2">Saved Products</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="notification.html">
                  <span className="material-icons align-middle">
                    notifications_none
                  </span>
                  <span className="morelist-text pl-2">Notifications</span>
                  <span className="yellow_cir float-right">2</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="#">
                  <span className="material-icons align-middle">
                    {" "}
                    settings_cell
                  </span>
                  <span className="morelist-text pl-2">Contact Admin</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="Freq-Quest.html">
                  <span className="material-icons align-middle">
                    {" "}
                    error_outline
                  </span>
                  <span className="morelist-text pl-2">
                    Frequently Asked Questions
                  </span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="#">
                  <span className="material-icons-outlined align-middle rotate-ic">
                    repeat
                  </span>
                  <span className="morelist-text pl-2">Return Policy</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="#">
                  <span className="material-icons-outlined align-middle">
                    privacy_tip
                  </span>
                  <span className="morelist-text pl-2">Privacy Policy</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="#">
                  <span className="material-icons-outlined align-middle rotate-ic">
                    note
                  </span>
                  <span className="morelist-text pl-2">Terms & Conditions</span>
                </a>
              </li>
              <li className="more-outline mb-3">
                <a href="#">
                  <span className="material-icons-outlined align-middle">
                    login
                  </span>
                  <span className="morelist-text pl-2">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
