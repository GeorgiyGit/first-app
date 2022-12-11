import { IComment } from "../comments/comment";
import { IGenre } from "../genres/genre";
import { IImage } from "../images/image";

export interface IEvent {
    id:number,
    title:string,
    text:string,
    placeId?:number,
    isOnline:boolean,

    site?:string,
    facebook?:string,
    instagram?:string,

    eventTime:Date,
    types:IGenre[],
    
    price:number,

    ownerId:string,
    ownerUserName:string;

    likedUsers:string[],
    favoriteUsers:string[],

    comments:IComment[],
    images:IImage[],

    fullRating:number
}