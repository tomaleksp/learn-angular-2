import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/index";
import { appRoutes } from './routes';
import { EventListResolver, EventRouteActivator } from "./events/index";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    exports: [],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
        ],
    providers: [
        EventService, ToastrService, EventListResolver, EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
        ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}