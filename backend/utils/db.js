const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/auth", {
    
}).then(() => {
    console.log("Database connected successfully");
}).catch((e)=> {
    console.log("err", e);
})
}
  

module.exports = connectDB;