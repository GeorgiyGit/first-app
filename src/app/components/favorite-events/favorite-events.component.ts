import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/events/event';
import { FavoriteService } from 'src/app/services/farorite.service';

@Component({
  selector: 'app-favorite-events',
  templateUrl: './favorite-events.component.html',
  styleUrls: ['./favorite-events.component.css']
})
export class FavoriteEventsComponent implements OnInit {

  events:IEvent[];

  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.getFavoriteEvents().subscribe(res=>{
      this.events=res;
    });
  }

  removeFavorite(id:number)
  {
    this.favoriteService.removeFavoriteEvent(id).subscribe(res=>{
      this.favoriteService.getFavoriteEvents().subscribe(res2=>{
        this.events=res2;
      });
    });
  }
}
