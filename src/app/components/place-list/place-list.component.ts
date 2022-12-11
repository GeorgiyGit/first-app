import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISimplePlace } from 'src/app/models/places/simple-place';
import { PlacesService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: ISimplePlace[] = [];
  filteredPlaces: ISimplePlace[] = [];
  filter: string = '';
  constructor(private placesService: PlacesService,
              private router:Router) { }

  ngOnInit(): void {
    this.placesService.getSimplePlaces().subscribe(result => {
      this.places = result;
      this.filteredPlaces = this.places;
    });
  }

  filterChange($event: any): void {
    let filter = $event.target.value;

    if (filter == '') this.filteredPlaces = this.places;
    else this.filteredPlaces = this.places.filter(x => x.name.toUpperCase().includes(filter.toUpperCase()));
  }


  click(id:number){
    this.router.navigateByUrl("/place-details/"+id);
  }
}
