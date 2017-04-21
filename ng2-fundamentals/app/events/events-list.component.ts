import { IEvent } from './shared/event.model';
import { Component, OnInit } from '@angular/core';

import { EventService } from './shared/event.service';
import { EventsAppComponent } from './../events-app.component';
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    template: `
     <div>
         <h1>Upcoming Angular 2 Events</h1>
         <hr/>
         <div class="row">
             <div *ngFor="let event of events" class="col-md-5">
                 <event-thumbnail [event]="event"></event-thumbnail>
             </div>
         </div>
     </div>
   `
})

export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => { this.events = events }); => use resolver instead
        this.events = this.route.snapshot.data['events'];
    }
}