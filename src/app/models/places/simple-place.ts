import { IGenre } from "../genres/genre";
import { IImage } from "../images/image";

export interface ISimplePlace {
    emit(place: ISimplePlace): unknown;
    id:number,
    name:string,
    route:string,
    fullRating:number,
    image:IImage,
    types:IGenre[]
}