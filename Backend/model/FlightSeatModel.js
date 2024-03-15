const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seatSchema = new Schema({
    seat_no : {
        type : String ,
        unique : true ,
        required : true ,
    } ,
    price: {
        type: Number,
        required: true
    } ,
    isBooked: {
    type: Boolean,
    default: false
    },
    user: {
    type: Schema.Types.ObjectId,
    ref: 'UserData'
    }
})

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;