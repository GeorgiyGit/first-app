import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { environment } from 'src/environments/environment';
import { ICreatePlace } from '../models/places/create-place';
import { IPlace } from '../models/places/place';
import { ISimplePlace } from '../models/places/simple-place';
@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    controllerUrl: string;

    constructor(private http: HttpClient) {
        this.controllerUrl = environment.apiUrl + "places/";
       }

    getSimplePlaces(): Observable<ISimplePlace[]> {
        return this.http.get<ISimplePlace[]>(this.controllerUrl);
    }
    getfullPlaces(): Observable<IPlace[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        return this.http.get<IPlace[]>(this.controllerUrl+"full",httpOptions);
    }
    addPlace(model:ICreatePlace):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        //let formData = new FormData();
        //formData.append("name",model.name);
        //formData.append("text",model.text);
        //formData.append("route",model.route);

        //formData.append("site",model.site??"");
        //formData.append("facebook",model.facebook??"");
        //formData.append("instagram",model.instagram??"");
        //formData.append("googleMaps",model.googleMaps);

        //formData.append("types",JSON.stringify(body['user']));
        //formData.append("text",model.text);
        return this.http.post(this.controllerUrl,model,httpOptions);
    }
    updatePlace(model:ICreatePlace):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        return this.http.put(this.controllerUrl,model,httpOptions);
    }
    getById(id:number): Observable<IPlace>{
        return this.http.get<IPlace>(this.controllerUrl+id);
    }

    deletePlace(id:number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer '+ localStorage.getItem('user-token')
            })
        };
        return this.http.delete(this.controllerUrl+id,httpOptions);
    }
}