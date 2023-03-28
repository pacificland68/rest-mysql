import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
    timestamps: false,
    tableName: 'task_info'
})

export class TaskInfo extends Model<TaskInfo>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    task_name!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    task_code!: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    delivery_date!: Date
}