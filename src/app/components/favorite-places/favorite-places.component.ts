import { Component, OnInit } from '@angular/core';
import { IPlace } from 'src/app/models/places/place';
import { FavoriteService } from 'src/app/services/farorite.service';

@Component({
  selector: 'app-favorite-places',
  templateUrl: './favorite-places.component.html',
  styleUrls: ['./favorite-places.component.css']
})
export class FavoritePlacesComponent implements OnInit {

  places:IPlace[];

  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.getFavoritePlaces().subscribe(res=>{
      this.places=res;
    });
  }

  removeFavorite(id:number)
  {
    this.favoriteService.removeFavoritePlace(id).subscribe(res=>{
      this.favoriteService.getFavoritePlaces().subscribe(res2=>{
        this.places=res2;
      });
    });
  }

}
