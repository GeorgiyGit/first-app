import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent } from '../models/events/event';
import { ICreateGenre } from '../models/genres/create-genre';
import { IGenre } from '../models/genres/genre';
import { IPlace } from '../models/places/place';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "favorite/";
   }

  addFavoritePlace(id:number):Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };

    return this.http.post(this.controllerUrl+"add-place/"+id,null,httpOptions);
  }

  addFavoriteEvent(id:number):Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.post(this.controllerUrl+"add-event/"+id,null,httpOptions);
  }


  removeFavoritePlace(id:number):Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.delete(this.controllerUrl+"remove-place/"+id,httpOptions);
  }

  removeFavoriteEvent(id:number):Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.delete(this.controllerUrl+"remove-event/"+id,httpOptions);
  }


  getFavoritePlaces():Observable<IPlace[]>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.get<IPlace[]>(this.controllerUrl+"get-places",httpOptions);
  }

  getFavoriteEvents():Observable<IEvent[]>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.get<IEvent[]>(this.controllerUrl+"get-events",httpOptions);
  }


  isFavoritePlace(id:number):Observable<boolean>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.get<boolean>(this.controllerUrl+"is-place/"+id,httpOptions);
  }

  isFavoriteEvent(id:number):Observable<boolean>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.get<boolean>(this.controllerUrl+"is-event/"+id,httpOptions);
  }
}
