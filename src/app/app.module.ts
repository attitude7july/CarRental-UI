import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CarComponent } from './car/car.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CarComponent,
    CartComponent,
    OrderComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
