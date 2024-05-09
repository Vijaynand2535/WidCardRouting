import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbrComponent } from './shared/components/navbr/navbr.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ApproutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbrComponent,
    ProductsComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
