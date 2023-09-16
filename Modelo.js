const mongoose=require('mongoose');
const Modelo = new mongoose.Schema({
    VIN: String,
    Country:String,
    City:String,
    State: String,
    Postal_Code: Number,
    Model_Year:Number,
    Make: String,
    Model: String
})

const ModeloCarros= mongoose.model("carros",Modelo);
module.exports = ModeloCarros;