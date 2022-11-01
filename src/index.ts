import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan"
import walletRoute from "./routes/walletRoute";

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/wallet", walletRoute)

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT} 🚀`)
})
