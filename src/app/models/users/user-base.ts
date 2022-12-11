import { IImage } from "../image";

export interface IUserBase {
    id:number,
    userName:string,
    Avatar?:IImage
}