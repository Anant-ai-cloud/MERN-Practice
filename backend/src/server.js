import express from "express"
import "dotenv/config"
import authRouter from "./routes/authRoutes.js"

const app = express()

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})
app.use(express.json({limit: "5mb"}))

app.use("/api/auth", authRouter)