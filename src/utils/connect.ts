import { Sequelize } from 'sequelize-typescript'
import { List } from "../models/List.model"
import { TaskInfo } from '../models/TaskInfo.model'

const connect = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "frank951216",
    database: 'lims-min-0805',
    logging: true,
    models: [List, TaskInfo]
})

export default connect