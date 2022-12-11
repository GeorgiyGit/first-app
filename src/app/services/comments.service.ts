import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../models/comments/comment';
import { ICreateComment } from '../models/comments/create-comment';
import { ICreateEvent } from '../models/events/create-event';
import { IEvent } from '../models/events/event';
import { ISimpleEvent } from '../models/events/simple-event';
@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    controllerUrl: string;

    constructor(private http: HttpClient) {
        this.controllerUrl = environment.apiUrl + "comments/";
    }

    addComment(model: ICreateComment): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + localStorage.getItem('user-token')
            })
        };

        return this.http.post(this.controllerUrl, model, httpOptions);
    }
    getPlaceComments(id: number): Observable<IComment[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + localStorage.getItem('user-token')
            })
        };
        return this.http.get<IComment[]>(this.controllerUrl + "place/" + id, httpOptions);
    }

    getEventComments(id:number): Observable<IComment[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        return this.http.get<IComment[]>(this.controllerUrl+"event/"+id,httpOptions);
    }

    getById(id:number): Observable<IComment> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        return this.http.get<IComment>(this.controllerUrl+id,httpOptions);
    }

    update(comment:ICreateComment): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        return this.http.put(this.controllerUrl,comment,httpOptions);
    }
}