export default function FoodItemsMobileSection({
  foodItems = [],
  itemsCountTotal = 0,
  fetching = false,
  setFetching,
  getRecommendedProducts,
  ...props
}) {
  //   <div className="" v-if="foodItems.value.length">
  //  <h6 className="inner-head">
  //    { foodItems.value.length } Available Deals
  //  </h6>
  //  <div className="row">
  //    <div
  //      className="col-md-6 col-lg-3"
  //      v-for="(data, i) in foodItems.value"
  //      :key="i"
  //    >
  return (
    <div className="fixed-food">
      <section className="food-items-bg  d-block d-lg-none mobilefoodTab-view">
        <div className="tabs-fixed">
          <div className="container ">
            <div className="d-flex">
              <div className=" justify-content-start"></div>
              <div className=" ml-auto justify-content-end">
                <p
                  className="mb-0"
                  data-toggle="modal"
                  data-target="#fillter-modal"
                >
                  {" "}
                  <span className="material-icons align-top pr-2">
                    filter_list
                  </span>
                  <span className="align-top">Filter</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-5">
                <ul
                  className="nav nav-tabs foodtabs"
                  id="foodTab"
                  role="tablist"
                >
                  <li className="nav-item ">
                    <a
                      className="nav-link active"
                      id="mobile-recommended-tab"
                      data-toggle="tab"
                      href="#mobile-recommended"
                      role="tab"
                      aria-controls="mobilepally"
                      aria-selected="true"
                    >
                      Recommended
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="mobile-pally-tab"
                      data-toggle="tab"
                      href="#mobile-pally"
                      role="tab"
                      aria-controls="mobile-recommended"
                      aria-selected="false"
                    >
                      Pally
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="mobile-pre-orders-tab"
                      data-toggle="tab"
                      href="#mobile-pre-orders"
                      role="tab"
                      aria-controls="mobile-pre-orders"
                      aria-selected="false"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-7">
                <ul className="list-unstyled mb-0 select-bg float-right d-none d-lg-block">
                  <li className="d-inline-block">
                    <div className="form-group mb-0">
                      <select className="form-control">
                        <option>Categories</option>
                        <option>Soup & stew ingredients</option>
                        <option>Foodstuffs</option>
                        <option>Meat, Poultry & Seafood</option>
                      </select>
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="form-group mb-0">
                      <select className="form-control">
                        <option>Sub Categories</option>
                        <option>Grains</option>
                        <option>Tubers & Roots</option>
                      </select>
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="form-group mb-0">
                      <select className="form-control">
                        <option>Sort By: Price (Low to High)</option>
                        <option>Price (Low to High)</option>
                        <option>Price (High to Low)</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-bottom" />
          </div>
        </div>

        <div className="food-bg product_list">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12">
                <div
                  className="tab-content mobiletabcontent"
                  id="foodTabContent"
                >
                  <div
                    className="tab-pane fade pally-bg"
                    id="mobile-pally"
                    role="tabpanel"
                    aria-labelledby="mobile-pally-tab"
                  >
                    <h6 className="inner-head mb-3 mt-3">16 Available Deals</h6>

                    <div className="d-flex mobile-product">
                      <div className=" justify-content-start">
                        <div className="pally-inner content">
                          <div className="products-img-wrapper  mb-2 pointer">
                            <a href="#">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="product-img"
                                src="/src/assets/images/MProducts-img2.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" ml-2 justify-content-end">
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Croaker Fish (Full Carton)</h5>
                          </a>
                          <a href="#" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </a>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500 <small>per slot (3 available slots)</small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img1.jpg"
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img3.jpg"
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img3.jpg"
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img1.jpg"
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block">
                              <small>2 slots left</small>
                            </li>
                          </ul>
                          <a href="#">
                            <button
                              type="button"
                              className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                            >
                              BUY SLOT
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mobile-product">
                      <div className=" justify-content-start">
                        <div className="pally-inner content">
                          <div className="products-img-wrapper  mb-2 pointer">
                            <a href="#">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="product-img"
                                src="/src/assets/images/MProducts-img3.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" ml-2 justify-content-end">
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">White Onions (40kg)</h5>
                          </a>
                          <a href="#" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | In Season
                          </a>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500 <small>per slot (3 available slots)</small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img1.jpg"
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img3.jpg"
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img3.jpg"
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/src/assets/images/list-img1.jpg"
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block">
                              <small>2 slots left</small>
                            </li>
                          </ul>
                          <a href="#">
                            <button
                              type="button"
                              className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                            >
                              BUY SLOT
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade  show active recommended-bg"
                    id="mobile-recommended"
                    role="tabpanel"
                    aria-labelledby="mobile-recommended-tab"
                  >
                    <h6 className="inner-head mb-3 mt-3">16 Available Deals</h6>
                    <div className="d-flex mobile-product">
                      <div className=" justify-content-start">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-2 pointer">
                            <a href="#">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="product-img"
                                src="/src/assets/images/MProducts-img5.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" ml-2 justify-content-end">
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Titus 20kg (Full Carton) </h5>
                          </a>
                          <a href="#" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </a>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget mb-2">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
                              <div className="mainstar hidden">
                                <span className="full" data-value="0"></span>
                                <span className="half" data-value="0"></span>
                              </div>
                              <div className="star">
                                <span className="full" data-value="1"></span>
                                <span className="half" data-value="0.5"></span>
                                <span className="selected"></span>
                              </div>
                              <div className="star">
                                <span className="full" data-value="2"></span>
                                <span className="half" data-value="1.5"></span>
                                <span className="selected"></span>
                              </div>

                              <div className="star">
                                <span className="full" data-value="3"></span>
                                <span className="half" data-value="2.5"></span>
                                <span className="selected"></span>
                              </div>

                              <div className="star">
                                <span className="full" data-value="4"></span>
                                <span className="half" data-value="3.5"></span>
                                <span className="selected"></span>
                              </div>

                              <div className="star">
                                <span className="full" data-value="5"></span>
                                <span className="half" data-value="4.5"></span>
                                <span className="selected"></span>
                              </div>
                            </div>
                            <div className="success-box">
                              <div className="text-message">(4.5/5.0)</div>
                            </div>
                          </section>
                          <a href="#">
                            <button
                              type="button"
                              className="brown-btn  text-uppercase btn-effects "
                            >
                              SELECT ORDER TYPE
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mobile-product">
                      <div className=" justify-content-start">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-2 pointer">
                            <a href="#">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="product-img"
                                src="/src/assets/images/MProducts-img2.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" ml-2 justify-content-end">
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Croaker Fish (Full Carton)</h5>
                          </a>

                          <a href="#" className="green-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            3% | In Season
                          </a>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦73,000
                            <s>(₦78,000)</s>
                          </h5>
                          <section className="rating-widget mb-2">
                            <div
                              className="rating-main pro-detail-star"
                              data-vote="0"
                            >
                              <div className="mainstar hidden">
                                <span className="full" data-value="0"></span>
                                <span className="half" data-value="0"></span>
                              </div>
                              <div className="star">
                                <span className="full" data-value="1"></span>
                                <span className="half" data-value="0.5"></span>
                                <span className="selected"></span>
                              </div>
                              <div className="star">
                                <span className="full" data-value="2"></span>
                                <span className="half" data-value="1.5"></span>
                                <span className="selected"></span>
                              </div>

                              <div className="star">
                                <span className="full" data-value="3"></span>
                                <span className="half" data-value="2.5"></span>
                                <span className="selected"></span>
                              </div>

                              <div className="star">
                                <span className="full" data-value="4"></span>
                                <span className="half" data-value="3.5"></span>
                                <span className="selected"></span>
                              </div>

                              <div className="star">
                                <span className="full" data-value="5"></span>
                                <span className="half" data-value="4.5"></span>
                                <span className="selected"></span>
                              </div>
                            </div>
                            <div className="success-box">
                              <div className="text-message"></div>
                            </div>
                          </section>
                          <a href="#">
                            <button
                              type="button"
                              className="brown-btn  text-uppercase btn-effects "
                            >
                              SELECT ORDER TYPE
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade preorder-bg"
                    id="mobile-pre-orders"
                    role="tabpanel"
                    aria-labelledby="mobile-pre-orders-tab"
                  >
                    <h6 className="inner-head mb-3 mt-3">3 Available Deals</h6>
                    <div className="">
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="#">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="mb-3 product-img"
                                  src="/src/assets/images/MPre-order1.png"
                                  alt="Pre-order1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="#" className="inner-head">
                              <h5 className="mb-2">Strawberries</h5>
                            </a>
                            <a href="#" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h6 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 per kg
                            </h6>
                            <p className="text-red mb-2">1kg of 50kg left</p>
                            <div className="preorder-progress stat-bar mb-2">
                              <span
                                className="stat-bar-rating"
                                role="stat-bar"
                                style={{ width: "80%" }}
                              >
                                80%
                              </span>
                            </div>
                            <p className="mb-2 dgrey-clr">
                              Delivery Date: July 23rd 2021
                            </p>
                            <a href="#">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                                data-toggle="modal"
                                data-target="#booknowModal"
                              >
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="#">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="mb-3 product-img"
                                  src="/src/assets/images/MPre-order2.png"
                                  alt="Pre-order1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="#" className="inner-head">
                              <h5 className="mb-2">Strawberries</h5>
                            </a>
                            <a href="#" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h6 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 per kg
                            </h6>
                            <p className="text-red mb-2">1kg of 50kg left</p>
                            <div className="preorder-progress stat-bar mb-2">
                              <span
                                className="stat-bar-rating"
                                role="stat-bar"
                                style={{ width: "30%" }}
                              >
                                30%
                              </span>
                            </div>
                            <p className="mb-2 dgrey-clr">
                              Delivery Date: July 23rd 2021
                            </p>
                            <a href="#">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="load-bg text-center mb-5 d-none d-lg-block">
                  <a href="#">
                    <button typ="button" className="load-more text-uppercase ">
                      Load more items
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
