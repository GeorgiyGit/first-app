export interface IGenre {
    id:number,
    name:string,

    events: number[],
    places: number[],

    parents:number[]
}