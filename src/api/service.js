const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 2000

app.use(cors())
app.use(bodyParser({ urlencoded: true }))

const storList = [
    {
        name: "Appolo Pharmacy",
        available: "3",
        unavailable: "2",
        availableList: ['med 1', 'med 2', 'med 3']
    },
    {
        name: "Medplus",
        available: "2",
        unavailable: "3",
        availableList: ['med 1', 'med 2']
    },
    {
        name: "JSS",
        available: "1",
        unavailable: "4",
        availableList: ['med 1']
    },
    {
        name: "ESI Pharmacy",
        available: "1",
        unavailable: "4",
        availableList: ['med 2']
    }
]

app.get("/store", (req, res) => {
    console.log("Get request at /store")
    let meds = JSON.parse(req.body.meds)
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

