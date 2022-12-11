import { IGenre } from "../genres/genre";
import { IImage } from "../images/image";

export interface ISimpleEvent {
    id:number,
    title:string,
    eventTime:Date,
    route:string,
    image:IImage,
    fullRating:number,
    types:IGenre[]
}