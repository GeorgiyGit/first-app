import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/models/events/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {
  public events:IEvent[];

  constructor(private eventsService:EventsService,
              private router:Router) { }

  ngOnInit(): void {
    this.eventsService.getfullEvents().subscribe(result => {
      this.events = result;
    });
  }

  deletePlace(id:number){
    this.eventsService.deleteEvent(id).subscribe(result=>{
      this.eventsService.getfullEvents().subscribe(result => {
        this.events = result;
      });
    });
  }
  editPlace(id:number){
    this.router.navigateByUrl("/edit-event/"+id);
  }
}
