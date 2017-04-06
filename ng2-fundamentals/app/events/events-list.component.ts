import { Component, OnInit } from '@angular/core';

import { EventService } from './shared/event.service';
import { EventsAppComponent } from './../events-app.component';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    //templateUrl: 'events-list.component.html'
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
    events: any[]
    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.events = this.eventService.getEvents();
     }
}