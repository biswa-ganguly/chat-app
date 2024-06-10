 import express from "express"
 import dotenv from  "dotenv"


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js"


 const app = express()
 const PORT = process.env.PORT || 3000


 dotenv.config()
 
 app.use(express.json())

 app.use("/api/auth",authRoutes)
 app.use("/api/messages", messageRoutes)
 app.use("/api/users", userRoutes)

//  app.get("/",(req,res)=>{
//     res.send("Welcome to my server")
//  })


 app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
 })