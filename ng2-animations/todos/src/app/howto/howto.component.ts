import { Component, OnInit, animate } from '@angular/core';
import { pageTransition } from '../animations'

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss'],
  animations: [ pageTransition ]
})
export class HowtoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}