import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlace } from 'src/app/models/places/place';
import { PlacesService } from 'src/app/services/place.service';

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.css']
})
export class PlacesEditComponent implements OnInit {

  public places:IPlace[];

  constructor(private placesService:PlacesService,
              private router:Router) { }

  ngOnInit(): void {
    this.placesService.getfullPlaces().subscribe(result => {
      this.places = result;
      console.log(result);
    });
  }

  deletePlace(id:number){
    this.placesService.deletePlace(id).subscribe(result=>{
      this.placesService.getfullPlaces().subscribe(result => {
        this.places = result;
      });
    });
  }
  editPlace(id:number){
    this.router.navigateByUrl("/edit-place/"+id);
  }
}
