export interface ICreateComment {
    id?:number,
    text:string,
    parentId?:number,
    eventId?:number,
    placeId?:number
}