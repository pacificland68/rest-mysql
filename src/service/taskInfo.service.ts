import { TaskInfo } from "../models/TaskInfo.model";
import { CreateTaskInfoInput } from '../schema/taskInfo.schema'

export async function findTaskInfo(id: string, currentPage: string, pageSize: string){
    var result = await TaskInfo.findAndCountAll({
        where: {id:id},
        offset: (Number(currentPage) - 1) * Number(pageSize),
        limit: Number(pageSize)
    })
    return result
}

export async function findAllTaskInfo(currentPage: string, pageSize: string){
    var result = await TaskInfo.findAndCountAll({
        offset: (Number(currentPage) - 1) * Number(pageSize),
        limit: Number(pageSize)
    })
    return result
}