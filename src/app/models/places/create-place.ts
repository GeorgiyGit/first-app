import { r3JitTypeSourceSpan } from "@angular/compiler";
import { ICreateImage } from "../images/create-image";

export interface ICreatePlace {
    id?:number,

    name:string,
    text:string,
    route:string,

    site?:string,
    facebook?:string,
    instagram?:string,
    googleMaps:string,

    types:number[],
    image:string
}