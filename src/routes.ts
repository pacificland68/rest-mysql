import 'reflect-metadata'
import { Express } from 'express'
import { getTaskInfoHandler, getAllTaskInfoHandler, createTaskInfoHandler } from './controller/taskInfo.controller'
import { getTaskInfoSchema, getAllTaskInfoSchema, createTaskInfoSchema } from './schema/taskInfo.schema'
import validateResource from './middleware/validateResource'

function routes(app: Express){
    app.get('/api/getAllTask', validateResource(getAllTaskInfoSchema), getAllTaskInfoHandler)

    app.post('/api/createTask', validateResource(createTaskInfoSchema), createTaskInfoHandler)
}

export default routes