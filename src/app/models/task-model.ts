export interface TaskModel {
    id : number;
    categoryId : number;
    title: string;
    isCompleted : boolean;
    createdOn :Date;
    modifiedOn: Date;
}
