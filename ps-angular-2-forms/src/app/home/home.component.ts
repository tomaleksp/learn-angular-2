import { Component } from '@angular/core';
import { Employee } from "../models/employee.model";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English", "Spanish", "Other"];
  model = new Employee('', 'Smith', true, 'W2', 'default');
  hasPrimaryLanguageError = false;

  valdatePrimaryLanguage(value){
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}