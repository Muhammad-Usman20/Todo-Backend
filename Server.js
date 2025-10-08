const express = require("express")
const mangooose = require("mongoose")
require("dotenv").config()

const routes = require("./routes/ToDoRoutes")

const cors = require("cors")
const { default: mongoose } = require("mongoose")

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// app.get("/",  (req, res)=>{
//     res.send("Hi....")
// }  )

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err))

    app.use("/api", routes)


app.listen(PORT, () => console.log(`Listening at ${PORT}....`))