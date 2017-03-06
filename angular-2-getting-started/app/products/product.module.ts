import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StarComponent } from './../shared/star.component';
import { ProductFilterPipe } from './product-list.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsGuard } from "./product-guard.service";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', 
                    canActivate: [ ProductDetailsGuard ],
                    component: ProductDetailComponent },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailsGuard
    ]
})
export class ProductModule{
}