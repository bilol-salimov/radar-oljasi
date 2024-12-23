import React, { Component } from "react";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    cars: [
      {
        name: "Malibu",
        cityNumber: 30,
        number: "A434AB",
        fine: 500,
      },
      {
        name: "Cobalt",
        cityNumber: 10,
        number: "A322XS",
        fine: 300,
      },
      {
        name: "Damas",
        cityNumber: 50,
        number: "A377GC",
        fine: 100,
      },
    ],
    isModalOpen: false,
    carData: {
      name: "Car",
      cityNumber: 0,
      number: "A000AA",
      fine: 0,
    },
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  changeCurrentValue = (value, isInc) => {
    const { carData } = this.state;
    if (value === "number") {
      if (isInc) {
        carData.cityNumber++;
      } else if (carData.cityNumber < 1) {
        carData.cityNumber = 0;
      } else {
        carData.cityNumber--;
      }
    }

    if (value === "fine") {
      if (isInc) {
        carData.fine++;
      } else if (carData.fine < 1) {
        carData.fine = 0;
      } else {
        carData.fine--;
      }
    }

    this.setState({
      carData,
    });
  };

  saveChanges = () => {
    const { cars, carData } = this.state;
    if (carData.cityNumber !== 0 && carData.fine !== 0) {
      cars.push(carData);
      this.setState({
        cars,
      });
      this.setState({
        carData: {
          name: "Car",
          cityNumber: 0,
          number: "A000AA",
          fine: 0,
        },
      });
    }
  };

  render() {
    const { cars, isModalOpen, carData } = this.state;

    return (
      <div className="container">
        <div className="row bg-light rounded p-2 my-2">
          <div className="col">
            <button onClick={this.openModal} className="btn btn-primary">
              Add Car
            </button>
            {isModalOpen ? (
              <Modal
                closeModal={this.closeModal}
                carData={carData}
                changeCurrentValue={this.changeCurrentValue}
                saveChanges={this.saveChanges}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Name</th>
                  <th>City Number</th>
                  <th>Number</th>
                  <th>Fine</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{car.name}</td>
                      <td>{car.cityNumber}</td>
                      <td>{car.number}</td>
                      <td>💰{car.fine}.00</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
