import { Component } from '@angular/core';
import { Employee } from "../models/employee.model";
import { FormPoster } from '../services/form-poster.service'
import { NgForm } from "@angular/forms";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [];
  model = new Employee('', 'Smith', true, 'W2', 'default');
  hasPrimaryLanguageError = false;
  startDate: Date;

  constructor(private formPoster: FormPoster) {
    this.startDate = new Date();
    // this.formPoster.getLanguages()
    //     .subscribe(
    //       data => this.languages = data.languages,
    //       err => console.log('err: ', err)
    //     );
  }

  // submitForm(form: NgForm) {
  //   // this.formPoster.postEmployeeForm(this.model);
  //   // validation
  //   this.valdatePrimaryLanguage(this.model.primaryLanguage);
  //   if (this.hasPrimaryLanguageError)
  //     return;

  //     this.formPoster.postEmployeeForm(this.model)
  //         .subscribe(
  //           data => console.log('success', data),
  //           err => console.log('error', err)
  //         )

  //   console.log(form);
  //   console.log(this.model);
  // }

  // valdatePrimaryLanguage(value) {
  //   if (value === 'default')
  //     this.hasPrimaryLanguageError = true;
  //   else
  //     this.hasPrimaryLanguageError = false;
  // }
}