import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICreateImage } from 'src/app/models/images/create-image';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  }

  @Output() addImageEvent = new EventEmitter<File>();
  uploadedImages: ICreateImage;
  successResponse: string;

  public onImageUpload(event: any) { 
    if(event!=null){
      this.addImageEvent.emit(event.target.files[0]);
    }
  }
}
