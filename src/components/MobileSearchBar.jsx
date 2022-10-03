import { DebounceInput } from "react-debounce-input";

export default function MobileSearchBar({
  searchField = "",
  searchItems = [],
  handleSearchButton = () => {},
  handleSearchField = () => {},
}) {
  return (
    <section>
      <div
        className="modal modal-full fade search-modal-bg show"
        id="search-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="search-modal"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="search-header Mobheader-fixed">
              <div className="d-flex">
                <div className="justfiy-content-start search-outer-wrap">
                  <a href="#">
                    <span>
                      <i
                        className="material-icons align-top"
                        data-dismiss="modal"
                      >
                        west
                      </i>
                      <DebounceInput
                        minLength={1}
                        type="text"
                        name="search"
                        value={searchField}
                        placeholder="Search"
                        debounceTimeout={300}
                        className="search-tabs align-top"
                        onChange={handleSearchField}
                      />
                      {/* <input
                        type="text"
                        placeholder="Search"
                        className="search-tabs align-top"
                      /> */}
                    </span>
                    <button className="yellow-bg" onClick={handleSearchButton}>
                      SEARCH
                    </button>
                  </a>
                </div>
                <div className="ml-auto justify-content-end">
                  <ul className="list-unstyled mb-0">
                    {/* <!-- <li className="d-inline-block align-top">
                                        <p className="mb-0"> <span className="material-icons  align-middle  pr-2">
                                                filter_list
                                            </span>Filter</p>
                                    </li> --> */}
                  </ul>
                </div>
              </div>
              <ul
                className="nav nav-tabs delivery-tabs"
                id="deliveryTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id=""
                    data-toggle="tab"
                    href="#Mobfood-tab"
                    role="tab"
                    aria-controls="Mobfood-tab"
                    aria-selected="true"
                  >
                    Food Items
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Mobuser-tab"
                    data-toggle="tab"
                    href="#users"
                    role="tab"
                    aria-controls="payment"
                    aria-selected="false"
                  >
                    Users
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-body p-0">
              <div className="tab-content" id="deliveryTabContent">
                <div
                  className="tab-pane fade show active Mobfood-tab mobile-search-food"
                  id="Mobfood-tab"
                  role="tabpanel"
                  aria-labelledby="Mobfood-tab-tab"
                >
                  {!searchItems.length || !searchField ? (
                    ""
                  ) : (
                    <>
                      <h6 className="result-found-wrap">
                        {searchItems.length} Results
                      </h6>
                      {searchItems.map((item, i) => (
                        <div className="d-flex mb-3">
                          <div key={i} className="justify-content-start pr-2">
                            <img
                              className="search-img"
                              src={item.product_images}
                              alt="search-img1"
                            />
                          </div>
                          <div className="justify-content-end">
                            <h6 className="">{item.product_name}</h6>
                            {/* <!-- <h6>₦75,000</h6> --> */}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div
                  className="tab-pane fade payment-bg"
                  id="users"
                  role="tabpanel"
                  aria-labelledby="Mobuser-tab"
                >
                  <h6 className="mb-2">3 Results</h6>
                  <div className="d-flex align-content-between flex-wrap myfollowers mb-4">
                    <div className="p-2">
                      <img
                        className="follow-img"
                        src="/assets/images/followers1.jpg"
                        alt="follwers-img1"
                      />
                    </div>
                    <div className="p-2 align-self-center">
                      <h6>Florence Jackson</h6>
                    </div>
                    <div className="ml-auto p-2 align-self-center">
                      <a href="#" className="follow-btn text-uppercase">
                        Follow{" "}
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-content-between flex-wrap myfollowers mb-4">
                    <div className="p-2">
                      <img
                        className="follow-img"
                        src="/assets/images/followers1.jpg"
                        alt="follwers-img1"
                      />
                    </div>
                    <div className="p-2 align-self-center">
                      <h6>Florence Jackson</h6>
                    </div>
                    <div className="ml-auto p-2 align-self-center">
                      <a href="#" className="follow-btn text-uppercase">
                        Follow{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
