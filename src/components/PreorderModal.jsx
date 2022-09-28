export default function PreorderModal() {
  return (
    <section>
      <div className="modal fade" id="preorderModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <b>Pre Order</b>
            </div>
            <div className="modal-body pl-3 pt-0 pr-3 preordermodal-text">
              <div className="row">
                <div className="col-8 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g 10"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                  <p>Price</p>
                  <h4>₦0</h4>
                </div>
              </div>
              <div className="modal-w m-auto mt-4 mb-3 text-center">
                <p className="mb-2">Delivery Date: July 23rd 2021</p>
                <div className="mb-5">
                  <button
                    type="button"
                    className="yellow-bg text-uppercase add-btn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function PreorderModal2() {
  return (
    <section>
      <div
        className="modal booknow-modal-bottom fade"
        id="booknowModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="booknowModal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <b>Pre Order</b>
            </div>
            <div className="modal-body pl-3 pt-0 pr-3 preordermodal-text">
              <div className="row">
                <div className="col-8 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g 10"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                  <p>Price</p>
                  <h4>₦0</h4>
                </div>
              </div>
              <div className="modal-w m-auto mt-4 mb-3 text-center">
                <p className="mb-2">Delivery Date: July 23rd 2021</p>
                <div className="mb-5">
                  <button
                    type="button"
                    className="yellow-bg text-uppercase add-btn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
