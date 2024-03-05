const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017' , {
    dbName : "UserData"
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

mongoose.connection.on('connected' , () => {
    console.log("mongoose Connected Succesfully")
})

mongoose.connection.on('error' , (err) => {
    console.log(err.message)
})

mongoose.connection.on('disconnected' , () => {
    console.log("mongoose is disconnected")
})

process.on('SIGINT' , async () => {
    try {
        await mongoose.connection.close();
    }
    catch(err) {
        console.log(err)
    }
    finally{
        process.exit(0);
    }
})