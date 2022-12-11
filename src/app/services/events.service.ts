import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateEvent } from '../models/events/create-event';
import { IEvent } from '../models/events/event';
import { ISimpleEvent } from '../models/events/simple-event';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "events/";
  }

  getSimpleEvents(): Observable<ISimpleEvent[]> {
    return this.http.get<ISimpleEvent[]>(this.controllerUrl);
  }
  getfullEvents(): Observable<IEvent[]> {
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.get<IEvent[]>(this.controllerUrl+"full",httpOptions);
}
  addEvent(model: ICreateEvent): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      })
    };
    return this.http.post(this.controllerUrl, model, httpOptions);
  }
  updateEvent(model: ICreateEvent): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      })
    };
    return this.http.put(this.controllerUrl, model, httpOptions);
  }
  getById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(this.controllerUrl + id);
  }

  deleteEvent(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      })
    };
    return this.http.delete(this.controllerUrl + id, httpOptions);
  }
}