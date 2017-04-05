import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-app',
    //templateUrl: 'name.component.html'
    template: `
        <nav-bar></nav-bar>
        <events-list></events-list>
    `
})

export class EventsAppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}