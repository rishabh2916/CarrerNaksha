require('dotenv').config()
const blogRoutes = require('./routes/blogs')
const express = require('express')
const mongoose = require('mongoose')
const roadmapRoutes = require('./routes/Roadmaps')
const app = express()

mongoose
  .connect(
    "mongodb+srv://rishabhrajpurohit1703:12345666@cluster0.mv2eggk.mongodb.net/minorproject?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.get('/', (req, res) => {
    res.json({ mssg: 'welcome to the app' })
})
app.get('/myassessment', (req, res) => {
    res.json({ mssg: "Please give assessment" })
})
app.use('/blogs', blogRoutes)
app.use('/roadmap', roadmapRoutes)




