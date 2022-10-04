const express = require('express')
const app = express()
const { cloudinary } = require('./utils/cloudinary')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()

app.use(helmet())
app.use(cors())
app.use(express.json({ limit: "10mb" }))

app.post(`/api/upload/${process.env.API_KEY}`, async (req, res) => {
  try {
    const file = req.body.data
    const response = await cloudinary.uploader.upload(file, {
      upload_preset: 'img_uploader'
    })
    res.json({ url: response.url })
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: 'Something went wrong!' })
  }
})

app.listen(process.env.PORT || 5000, () => {
  console.log("listening...")
})