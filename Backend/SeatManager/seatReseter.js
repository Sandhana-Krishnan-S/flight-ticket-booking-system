const Seat = require('../model/FlightSeatModel');

const initialPrice = 100;

const seatsData = [
    { seat_no: 'A1', price: initialPrice },
    { seat_no: 'A2', price: initialPrice },
    { seat_no: 'A3', price: initialPrice },
    { seat_no: 'A4', price: initialPrice },
    { seat_no: 'A5', price: initialPrice },
    { seat_no: 'A6', price: initialPrice },
    { seat_no: 'B1', price: initialPrice },
    { seat_no: 'B2', price: initialPrice },
    { seat_no: 'B3', price: initialPrice },
    { seat_no: 'B4', price: initialPrice },
    { seat_no: 'B5', price: initialPrice },
    { seat_no: 'B6', price: initialPrice },
    { seat_no: 'C1', price: initialPrice },
    { seat_no: 'C2', price: initialPrice },
    { seat_no: 'C3', price: initialPrice },
    { seat_no: 'C4', price: initialPrice },
    { seat_no: 'C5', price: initialPrice },
    { seat_no: 'C6', price: initialPrice },
    { seat_no: 'D1', price: initialPrice },
    { seat_no: 'D2', price: initialPrice },
    { seat_no: 'D3', price: initialPrice },
    { seat_no: 'D4', price: initialPrice },
    { seat_no: 'D5', price: initialPrice },
    { seat_no: 'D6', price: initialPrice },
    { seat_no: 'E1', price: initialPrice },
    { seat_no: 'E2', price: initialPrice },
    { seat_no: 'E3', price: initialPrice },
    { seat_no: 'E4', price: initialPrice },
    { seat_no: 'E5', price: initialPrice },
    { seat_no: 'E6', price: initialPrice },
    { seat_no: 'F1', price: initialPrice },
    { seat_no: 'F2', price: initialPrice },
    { seat_no: 'F3', price: initialPrice },
    { seat_no: 'F4', price: initialPrice },
    { seat_no: 'F5', price: initialPrice },
    { seat_no: 'F6', price: initialPrice },
    { seat_no: 'G1', price: initialPrice },
    { seat_no: 'G2', price: initialPrice },
    { seat_no: 'G3', price: initialPrice },
    { seat_no: 'G4', price: initialPrice },
    { seat_no: 'G5', price: initialPrice },
    { seat_no: 'G6', price: initialPrice },
    { seat_no: 'H1', price: initialPrice },
    { seat_no: 'H2', price: initialPrice },
    { seat_no: 'H3', price: initialPrice },
    { seat_no: 'H4', price: initialPrice },
    { seat_no: 'H5', price: initialPrice },
    { seat_no: 'H6', price: initialPrice },
    { seat_no: 'I1', price: initialPrice },
    { seat_no: 'I2', price: initialPrice },
    { seat_no: 'I3', price: initialPrice },
    { seat_no: 'I4', price: initialPrice },
    { seat_no: 'I5', price: initialPrice },
    { seat_no: 'I6', price: initialPrice }
  ];

const resetSeat =  () => {
    console.log("object")
      Seat.insertMany(seatsData)
        .then((savedSeats) => {
          console.log('Predefined seats saved:', savedSeats);
          return true;
        })
        .catch((error) => {
          console.error('Error:', error);
          return false;
        });
}

module.exports = resetSeat;