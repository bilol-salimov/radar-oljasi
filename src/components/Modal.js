import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { closeModal, carData, changeCurrentValue, saveChanges } = this.props;
    return (
      <div className="card mt-3">
        <div className="card-header">
          <h3>Add Number</h3>
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-5">
              <h3>City Number</h3>
              <button
                onClick={() => changeCurrentValue("number", false)}
                className="btn btn-secondary"
              >
                -
              </button>
              <button className="btn">{carData.cityNumber}</button>
              <button
                onClick={() => changeCurrentValue("number", true)}
                className="btn btn-info"
              >
                +
              </button>
            </div>
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://www.sixt.co.uk/fileadmin2/files/global/user_upload/fleet/png/1050x600/gentra-ravon-4d-silber-2017.png"
                alt="car"
              />
            </div>
            <div className="col-5">
              <h3>Fine</h3>
              <button
                onClick={() => changeCurrentValue("fine", false)}
                className="btn btn-secondary"
              >
                -
              </button>
              <button className="btn">💰{carData.fine}.00</button>
              <button
                onClick={() => changeCurrentValue("fine", true)}
                className="btn btn-info"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button onClick={closeModal} className="btn btn-warning m-1">
            Cancel
          </button>
          <button onClick={saveChanges} className="btn btn-success m-1">
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
