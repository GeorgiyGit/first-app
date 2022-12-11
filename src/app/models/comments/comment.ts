export interface IComment {
    id:number,
    text:string,
    creationTime:Date,
    isChanged:boolean,
    parentId?:number,

    ownerId:string,
    ownerUserName:string,
    likes:number,
    disLikes:number
}