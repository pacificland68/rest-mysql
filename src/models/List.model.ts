import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: 'list'
})

export class List extends Model<List>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    idList!: number
}