import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StarComponent } from './star.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [ 
        CommonModule,
        FormsModule,
        StarComponent
     ],
    declarations: [ StarComponent ],
    providers: [],
})
export class SharedModule { }