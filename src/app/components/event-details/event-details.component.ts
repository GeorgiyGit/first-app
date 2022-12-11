import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/events/event';
import { AccountService } from 'src/app/services/account.service';
import { EventsService } from 'src/app/services/events.service';
import { FavoriteService } from 'src/app/services/farorite.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  isFavorite:boolean;
  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              public accountService:AccountService,
              private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.eventsService.getById(parseInt(id))
      .subscribe(res => {
        this.event = res;
      });
  }


  removeFavorite() {
    this.favoriteService.removeFavoriteEvent(this.event.id).subscribe(res => {
      this.isFavorite = !this.isFavorite;
    });
  }

  addFavorite() {
    this.favoriteService.addFavoriteEvent(this.event.id).subscribe(res => {
      this.isFavorite = !this.isFavorite;
    });
  }
}
