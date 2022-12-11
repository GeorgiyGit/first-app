import { IImage } from "../image";

export interface IUser {
    id:string,
    userName:string,
    email:string,
    creationTime:Date,

    createdComments:number[],
    likedComments:number[],
    dislikedComments:number[],

    createdEvents:number[],
    likedEvents:number[],
    favoriteEvents:number[],

    createdPlaces:number[],
    likedPlaces:number[],
    favoritePlaces:number[],

    Avatar?:IImage
}