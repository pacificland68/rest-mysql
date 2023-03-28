import { Sequelize } from 'sequelize-typescript'
import { List } from "../models/List.model"

const connect = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "frank951216",
    database: 'lims-min-0805',
    logging: true,
    models: [List]
})

export default connect