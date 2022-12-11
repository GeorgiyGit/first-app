import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/models/events/event';
import { ISimpleEvent } from 'src/app/models/events/simple-event';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  //displayedColumns: string[] = ['Title', 'CreatedDate', 'Route'];
  events: ISimpleEvent[] = [];
  filteredEvents: ISimpleEvent[] = [];

  constructor(private eventsService: EventsService,
              private router:Router) { }

  ngOnInit(): void {
    this.eventsService.getSimpleEvents().subscribe(result => {
      this.events = result;
      this.filteredEvents=result;
    });
  }

  filterChange($event: any): void {
    let filter = $event.target.value;

    if (filter == '') this.filteredEvents = this.events;
    else this.filteredEvents = this.events.filter(x => x.title.toUpperCase().includes(filter.toUpperCase()));
  }


  click(id:number){
    this.router.navigateByUrl("/event-details/"+id);
  }
}
