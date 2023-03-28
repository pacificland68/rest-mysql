import "reflect-metadata"
import express from 'express'
import config from 'config'
import connect from './utils/connect'

const port = config.get<number>('port')
const app = express()

const corOptions = {
    origin: "http://localhost:9999"
}

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.listen(port, async () => {
    console.log(`app is running at http://localhost:${port}`)

    await connect.sync({force: false})

    
})