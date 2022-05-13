const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Medicine = require('./models/medicines')
const Doctor = require('./models/doctors')

const app = express()
const port = 2000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser({ urlencoded: true }))

mongoose.connect(
    'mongodb+srv://chetan:Shcsl1702@cluster0.u7j2y.mongodb.net/DrDoc?retryWrites=true&w=majority',
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to db");
        }
    }
)

app.post('/doctor', async (req, res) => {
    console.log('Get request at /doctor')
    let specialization = req.body.specialization
    let doctorList = await Doctor.find({ specialization: specialization })
    console.log(doctorList)
    res.send(doctorList)
})

app.post("/store", async (req, res) => {
    console.log("Get request at /store")
    let storList = await Medicine.find({})
    let meds = req.body.meds
    let medLen = meds.length
    let stores = []
    storList.forEach((store) => {
        meds.forEach((med) => {
            if (store.availableList.includes(med)) {
                let isNew = true
                stores.forEach((stor) => {
                    if (stor.name == store.name) {
                        isNew = false;
                        stor.available += 1
                        stor.unavailable -= 1
                        stor.availableList.push(med)
                        stor.unavailableList = stor.unavailableList.filter(m => m != med)
                    }
                })
                if (isNew) {
                    stores.push(
                        {
                            name: store.name,
                            available: 1,
                            unavailable: medLen - 1,
                            availableList: [med],
                            unavailableList: meds.filter(m => m != med)
                        }
                    )
                }
            }
        })
    })
    console.log(stores)
    res.send(stores)
})

app.listen(port, () => {
    console.log(`Server running in localhost:${port}`)
})

