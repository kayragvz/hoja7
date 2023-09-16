const mongoose = require('mongoose');
const dbconnect = () => {
    //mongoose.set('strictQuery',true)
    mongoose.connect("mongodb://127.0.0.1:27017/Kayra",{},(err,res)=>{
        if(!err){
            console.log("Conexion correcta")
        }
        else{
            console.log("Error de conexion",err);
        }
    })
}

module.exports = dbconnect;