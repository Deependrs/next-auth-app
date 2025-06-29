import mongoose from "mongoose";

// 
export  async function connect() {
    try {

       const dbConnect =  await mongoose.connect(process.env.MONGODB_URI!)
       const connection = mongoose.connection;


       connection.on("connected", () => {
            console.log("Connected to MongoDB");
       });
       connection.on("error", (error) => {
            console.error(error, "   mongodb connection error"  );
            process.exit(1);
       });
        
    } catch (error) {
        console.error(error, "Failed to connect to MongoDB"  );
        
    }
    
}