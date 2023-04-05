import "reflect-metadata"
import express from 'express'
import config from 'config'
import connect from './utils/connect'
import routes from './routes'

const port = config.get<number>('port')
const app = express()

const corOptions = {
    origin: "http://localhost:9999"
}

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(function(err: any, req: any, res: any, next: any) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(port, async () => {
    console.log(`app is running at http://localhost:${port}`)

    await connect.sync({force: false})

    routes(app)
})