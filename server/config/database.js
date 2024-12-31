const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
}

module.exports=dbConnect;