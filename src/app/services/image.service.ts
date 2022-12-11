import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICreateImage } from "../models/images/create-image";
import { IImage } from "../models/images/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  controllerUrl: string;
  
  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "images/";
   }

  CreateImage(model:ICreateImage): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
          Authorization: 'Bearer '+ localStorage.getItem('user-token')
      })
    };
    const formData: FormData = new FormData();
console.log(model.file);
    formData.append('id', model.id+"");
    formData.append('file', model.file);
    formData.append('eventId', model.eventId+"");
    formData.append('placeId', model.placeId+"");

    console.log(formData);
    return this.http.post(this.controllerUrl, model, httpOptions);
  }
}
