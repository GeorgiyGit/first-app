import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlace } from 'src/app/models/places/place';
import { ISimplePlace } from 'src/app/models/places/simple-place';
import { PlacesService } from 'src/app/services/place.service';

@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.component.html',
  styleUrls: ['./select-place.component.css']
})
export class SelectPlaceComponent implements OnInit {

  places: ISimplePlace[];

  selectedPlace: ISimplePlace;

  @Output() selectePlaceEvent = new EventEmitter<ISimplePlace>();
  @Input() placeholder:string;

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    this.placesService.getSimplePlaces().subscribe(result => {
      this.places = result;
    });
  }

  select(e: any): void {
    let place = this.places.find(x => x?.name === e.target.value);
    if (place != null) {
      this.selectePlaceEvent.emit(place);
    }
  }
}
