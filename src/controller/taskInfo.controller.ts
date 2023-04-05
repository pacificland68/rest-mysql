import { Request, Response } from 'express'
import { UpdateTaskInfoInput, AllTaskInfoInput, CreateTaskInfoInput } from '../schema/taskInfo.schema'
import { findTaskInfo, findAllTaskInfo } from '../service/taskInfo.service'

export async function getTaskInfoHandler(
    req: Request<UpdateTaskInfoInput['query']>, res: Response
){
    const id = req.query.id as string
    const currentPage = req.query.currentPage as string
    const pageSize = req.query.pageSize as string

    const taskInfo = await findTaskInfo(id, currentPage, pageSize)

    if(!taskInfo){
        return res.sendStatus(404)
    }
    return res.send(taskInfo)
}

export async function getAllTaskInfoHandler(req: Request<AllTaskInfoInput['query']>, res: Response){
    const currentPage = req.query.currentPage as string
    const pageSize = req.query.pageSize as string

    console.log('currentPage', currentPage, pageSize)

    const allTaskInfo = await findAllTaskInfo(currentPage, pageSize)

    if(!allTaskInfo){
        return res.sendStatus(404)
    }

    return res.send(allTaskInfo)
}

export async function createTaskInfoHandler(
        req: Request<{}, {}, CreateTaskInfoInput['body']>, 
        res: Response
    ){
    // const taskName = req.body.taskName as string
    // const taskCode = req.body.taskCode as string
    // const deliveryDate = req.body.deliveryDate as Date

    try{
        console.log('createTaskInfo', req.body)
        return res.status(200)
    }catch(e: any){
        return res.status(500).send(e.message)
    }
}