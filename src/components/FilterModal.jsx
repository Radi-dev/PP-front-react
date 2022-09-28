function FilterModal() {
  return (
    <div
      className="modal modal-full fade fillter-modal-bg"
      id="fillter-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="fillter-modal"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" data-dismiss="modal">
              <i className="material-icons">west</i> Filter
            </h5>
          </div>
          <div className="modal-body select-bg">
            <ul className="list-unstyled clearfix mb-0">
              <li>
                <div className="form-group mb-0">
                  <select className="form-control">
                    <option>Categories</option>
                    <option>Soup & stew ingredients</option>
                    <option>Foodstuffs</option>
                    <option>Meat, Poultry & Seafood</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="form-group mb-0">
                  <select className="form-control">
                    <option>Sub Categories</option>
                    <option>Grains</option>
                    <option>Tubers & Roots</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="form-group mb-0">
                  <select className="form-control">
                    <option>Sort By: Price (Low to High)</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                  </select>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <div className="filter-main-btn">
                <div className="btneffects-bg">
                  <button
                    type="button"
                    className="border-btneffects text-uppercase existpally-btn"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterModal;
