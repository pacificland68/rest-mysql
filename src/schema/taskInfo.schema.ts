import { object, string, TypeOf, date } from 'zod'

const params = {
    query: object({
        id: string({
            required_error: 'id is required'
        }),
        currentPage: string({
            required_error: 'currentPage is required'
        }),
        pageSize: string({
            required_error: 'pageSize is required'
        })
    })
}

const allTaskParams = {
    query: object({
        currentPage: string({
            required_error: 'currentPage is required'
        }),
        pageSize: string({
            required_error: 'pageSize is required'
        })
    })
}

const createTaskParams = {
    body: object({
        taskName: string({
            required_error: 'task name is required'
        }),
        taskCode: string({
            required_error: 'required code is required'
        }),
        deliveryDate: date({
            required_error: 'delivery date is required'
        })
    })
}

export const getTaskInfoSchema = object({
    ...params
})

export const getAllTaskInfoSchema = object({
    ...allTaskParams
})

export const createTaskInfoSchema = object({
    ...createTaskParams
})

export type UpdateTaskInfoInput = TypeOf<typeof getTaskInfoSchema>
export type AllTaskInfoInput = TypeOf<typeof getAllTaskInfoSchema>
export type CreateTaskInfoInput = TypeOf<typeof createTaskInfoSchema>