import { AxiosGet, AxiosPost } from "../services/useAxios";
import conf from "../config.json";
import { useEffect, useState } from "react";
import Shimmer from "react-js-loading-shimmer";
function FoodItemsSection() {
  const [foodItems, setFoodItems] = useState([]);
  const [itemsCountTotal, setItemsCountTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [fetching, setFetching] = useState(false);
  const getRecommendedProducts = () => {
    // console.log("getting prods", offset);
    setFetching(true);
    const _payload = { offset: offset, user_id: "x" };
    return AxiosPost(conf.base_url + "/GetRecommendedProducts", _payload, {
      region: conf.region,
    }).then((res) => {
      console.log("dataaa", res);
      setFoodItems([...foodItems, ...res?.data?.recommendedproducts]);
      setFetching(false);
      setItemsCountTotal(res?.data?.total_products);
    });
    // .then(() => {
    //   console.log("offset lent", offset);
    //   setOffset(foodItems.length);
    //   console.log("offset new lent", offset);
    // });
  };

  useEffect(() => {
    getRecommendedProducts();
  }, []);
  useEffect(() => {
    console.log("offset lent", offset);
    setOffset(foodItems.length);
    console.log("offset new lent", offset);
  }, [foodItems]);

  return (
    <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  id=""
                  data-toggle="tab"
                  href="#pally"
                  role="tab"
                  aria-controls="pally"
                  aria-selected="true"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="recommended-tab"
                  data-toggle="tab"
                  href="#recommended"
                  role="tab"
                  aria-controls="recommended"
                  aria-selected="false"
                >
                  Pally
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pre-orders-tab"
                  data-toggle="tab"
                  href="#pre-orders"
                  role="tab"
                  aria-controls="pre-orders"
                  aria-selected="false"
                >
                  Recommended
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-7">
            <form className="form-inline select-bg float-right">
              <div className="form-group mb-0">
                <select className="form-control border-right-0">
                  <option>Categories</option>
                  <option>Soup & stew ingredients</option>
                  <option>Foodstuffs</option>
                  <option>Meat, Poultry & Seafood</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <select className="form-control  border-right-0">
                  <option>Sub Categories</option>
                  <option>Grains</option>
                  <option>Tubers & Roots</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <select className="form-control">
                  <option>Sort By: Price (Low to High)</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <hr className="border-bottom" />
        <div className="row ">
          <div className="col-lg-12">
            <div className="tab-content main" id="foodTabContent">
              <div
                className="tab-pane fade show active "
                id="recommended"
                role="tabpanel"
                aria-labelledby="recommended-tab"
              >
                {!itemsCountTotal ? (
                  <h6 className="inner-head mb-3 mt-3">
                    Fetching Available Deals
                  </h6>
                ) : (
                  <h6 className="inner-head mb-3 mt-3">
                    {itemsCountTotal} Available Deals
                  </h6>
                )}
                <div className="">
                  <div className="row">
                    {!foodItems.length
                      ? [...Array(4)].map((item) => (
                          <div key={item} className="col-md-6 col-lg-3">
                            <div className="pally-inner ">
                              <Shimmer
                                className={
                                  "class_name_test h-100 product-img mb3"
                                }
                              />

                              <div className="pally-content">
                                <Shimmer />
                                <Shimmer className={"w-50 "} />
                                {/* <Shimmer /> */}
                                <Shimmer className={"w-75 "} />
                                <Shimmer />
                                <div style={{ height: "2rem" }}>
                                  <Shimmer className={"h-100 w-85"} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : foodItems.map((food, i) => (
                          <div className="col-md-6 col-lg-3" key={i}>
                            <div className="pally-inner ">
                              <div className="products-img-wrapper  mb-3 pointer">
                                <a href="#">
                                  <div className="heart-icon">
                                    <span className="material-icons">
                                      favorite_border
                                    </span>
                                  </div>
                                  <img
                                    className="mb-3 product-img"
                                    src={food.product_images}
                                    alt={food.product_name}
                                  />
                                </a>
                              </div>

                              <div className="pally-content">
                                <a href="#" className="inner-head">
                                  <h5 className="mb-2">{food.product_name} </h5>
                                </a>
                                <a href="#" class="green-bg">
                                  <span class="material-icons-outlined">
                                    arrow_right_alt{" "}
                                  </span>
                                  {food.is_season}% | In Season
                                </a>
                                <h5 class="mb-2 mt-2 font-weight-bold simhead">
                                  ₦
                                  {food.product_discount > 0
                                    ? (
                                        food.product_price -
                                        food.product_price /
                                          food.product_discount
                                      ).toFixed(2)
                                    : food.product_price}
                                  <s>
                                    {food.product_discount > 0
                                      ? `(${food.product_price})`
                                      : ""}
                                  </s>
                                </h5>
                                <section className="rating-widget">
                                  {/* <div className="no-ratings">
                                    <p>No ratings yet</p>
                                  </div> */}
                                  <div
                                    className="rating-main pro-detail-star"
                                    data-vote="0"
                                  >
                                    <div className="mainstar hidden">
                                      <span
                                        className="full"
                                        data-value="0"
                                      ></span>
                                      <span
                                        className="half"
                                        data-value="0"
                                      ></span>
                                    </div>
                                    <div className="star">
                                      <span
                                        className="full"
                                        data-value="1"
                                      ></span>
                                      <span
                                        className="half"
                                        data-value="0.5"
                                      ></span>
                                      <span className="selected"></span>
                                    </div>
                                    <div className="star">
                                      <span
                                        className="full"
                                        data-value="2"
                                      ></span>
                                      <span
                                        className="half"
                                        data-value="1.5"
                                      ></span>
                                      <span className="selected"></span>
                                    </div>

                                    <div className="star">
                                      <span
                                        className="full"
                                        data-value="3"
                                      ></span>
                                      <span
                                        className="half"
                                        data-value="2.5"
                                      ></span>
                                      <span className="selected"></span>
                                    </div>

                                    <div className="star">
                                      <span
                                        className="full"
                                        data-value="4"
                                      ></span>
                                      <span
                                        className="half"
                                        data-value="3.5"
                                      ></span>
                                      <span className="selected"></span>
                                    </div>

                                    <div className="star">
                                      <span
                                        className="full"
                                        data-value="5"
                                      ></span>
                                      <span
                                        className="half"
                                        data-value="4.5"
                                      ></span>
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
                        ))}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade recommended-bg"
                id="pally"
                role="tabpanel"
                aria-labelledby="pally-tab"
              >
                <h6 className="inner-head ">16 Available Deals</h6>
                <div className="">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner ">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="product_detail.html">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className=" product-img mb-3"
                              src="/assets/images/Product-img1.jpg"
                              alt="Product-img1"
                            />
                          </a>
                        </div>

                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Titus 20kg (Full Carton) </h5>
                          </a>
                          <a href="#" className="red-bg">
                            <span className="material-icons-outlined">
                              arrow_right_alt
                            </span>
                            9% | <span className="clr-gr">In Season</span>
                          </a>
                          <h5 className="mb-2 mt-2 font-weight-bold simhead">
                            ₦7,500{" "}
                            <small>
                              per slot (slot size per person goes here)
                            </small>
                          </h5>
                          <h6 className="mb-2">Time left: 68:50:52</h6>
                          <ul className="list-unstyled pallylist-bg mb-2">
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/assets/images/list-img1.jpg"
                                alt="list-img1"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/assets/images/list-img3.jpg"
                                alt="list-img2"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/assets/images/list-img3.jpg"
                                alt="list-img3"
                              />
                            </li>
                            <li className="d-inline-block pally-left">
                              <img
                                className="list-img"
                                src="/assets/images/list-img1.jpg"
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

                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Product-img6.png"
                              alt="Product-img6"
                            />
                          </a>
                        </div>

                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Soya Beans (100kg)</h5>
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
                          <section className="rating-widget">
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Product-img3.png"
                              alt="Product-img1"
                            />
                          </a>
                        </div>
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">White Onions (40kg)</h5>
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
                          <section className="rating-widget">
                            <div className="no-ratings">
                              <p>No ratings yet</p>
                            </div>
                            {/* <!-- <div className="rating-main pro-detail-star" data-vote="0">
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
                                                </div> --> */}
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Product-img4.png"
                              alt="Product-img1"
                            />
                          </a>
                        </div>
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Guinea Corn Red (Paint... </h5>
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
                          <section className="rating-widget">
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

                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Product-img5.png"
                              alt="Product-img1"
                            />
                          </a>
                        </div>
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2">Soya Beans (Paint Bucket) </h5>
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
                          <section className="rating-widget ">
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
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Product-img6.png"
                              alt="Product-img1"
                            />
                          </a>
                        </div>
                        <div className="pally-content">
                          <a href="#" className="inner-head">
                            <h5 className="mb-2 ">Soya Beans (100kg) </h5>
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
                          <section className="rating-widget">
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
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade preorder-bg"
                id="pre-orders"
                role="tabpanel"
                aria-labelledby="pre-orders-tab"
              >
                <h6 className="inner-head mb-3 mt-3">3 Available Deals</h6>
                <div className="">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Pre-order1.png"
                              alt="Pre-order1"
                            />
                          </a>
                        </div>

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
                              data-target="#preorderModal"
                            >
                              Book Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Pre-order2.png"
                              alt="Pre-order2"
                            />
                          </a>
                        </div>
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
                    <div className="col-md-6 col-lg-3 ">
                      <div className="pally-inner">
                        <div className="products-img-wrapper  mb-3 pointer">
                          <a href="#">
                            <div className="heart-icon">
                              <span className="material-icons">
                                favorite_border
                              </span>
                            </div>
                            <img
                              className="mb-3 product-img"
                              src="/assets/images/Pre-order3.png"
                              alt="Product-img3"
                            />
                          </a>
                        </div>
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
                          <h6
                            className="mb-2 mt-2
                                             font-weight-bold simhead"
                          >
                            ₦7,500 per kg
                          </h6>
                          <p className="text-red mb-2 text-uppercase">Closed</p>
                          <div className="preorder-progress stat-bar mb-2">
                            <span
                              className="stat-bar-rating"
                              role="stat-bar"
                              style={{ width: "100%" }}
                            >
                              100%
                            </span>
                          </div>
                          <p className="mb-2 dgrey-clr">
                            Delivery Date: July 23rd 2021
                          </p>
                          <a href="#" className="closed-opacity">
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
            </div>

            {!foodItems.length || foodItems.length === itemsCountTotal ? (
              ""
            ) : fetching ? (
              <div className="load-bg text-center mb-5 d-none d-lg-block">
                <button
                  onClick={getRecommendedProducts}
                  type="button"
                  className="load-more text-uppercase "
                  disabled
                >
                  Fetching...
                </button>
              </div>
            ) : (
              <div className="load-bg text-center mb-5 d-none d-lg-block">
                <button
                  onClick={getRecommendedProducts}
                  type="button"
                  className="load-more text-uppercase "
                >
                  Load more items
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FoodItemsSection;
