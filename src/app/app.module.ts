import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaginationComponent } from './pagination/pagination/pagination.component';
import {PaginationModule} from './pagination/pagination.module';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'products',component:ProductListComponent},
  {path: 'products/:id',component:ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginationModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
