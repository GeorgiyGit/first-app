import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlace } from 'src/app/models/places/place';
import { AccountService } from 'src/app/services/account.service';
import { EventsService } from 'src/app/services/events.service';
import { FavoriteService } from 'src/app/services/farorite.service';
import { PlacesService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place:IPlace;
  isFavorite:boolean;
  constructor(private route:ActivatedRoute,
              private placesService:PlacesService,
              public accountService:AccountService,
              private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

      this.placesService.getById(parseInt(id))
        .subscribe(res => {
          this.place=res;
          console.log(res.id);
        });

    if(this.accountService.isAuthenticated()){
      this.favoriteService.isFavoritePlace(parseInt(id)).subscribe(res=>{
        this.isFavorite=res;
      });
    }
  }


  removeFavorite()
  {
    this.favoriteService.removeFavoritePlace(this.place.id).subscribe(res=>{
      this.isFavorite=!this.isFavorite;
    });
  }

  addFavorite()
  {
    this.favoriteService.addFavoritePlace(this.place.id).subscribe(res=>{
      this.isFavorite=!this.isFavorite;
    });
  }
}
