import { TaskModel } from '@app/models/task-model'

export class CategoryModel {
    id: number;
    userId: number;
    name: string;
    taskList: TaskModel[]
}
