const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Store = require('./models/stores')
const Doctor = require('./models/doctors')
const Support = require('./models/support')

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
    console.log('post request at /doctor')
    let specialization = req.body.specialization
    let doctorList = await Doctor.find({ specialization: specialization })
    console.log(doctorList)
    res.send(doctorList)
})

app.post("/store", async (req, res) => {
    console.log("post request at /store")
    let storList = await Store.find({})
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
                            unavailableList: meds.filter(m => m != med),
                            address: store.address,
                            phone: store.phone,
                            website: store.website
                        }
                    )
                }
            }
        })
    })
    console.log(stores)
    res.send(stores)
})

app.post("/support", async (req, res) => {
    console.log("post request at /store")
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let query = req.body.query
    try {
        const feedback = new Support({
            name: name,
            email: email,
            phone: phone,
            query: query
        })
        await feedback.save()
        console.log(feedback);
        res.send("Query Submitted")
    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`Server running in localhost:${port}`)
})

