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
import { HomeComponent } from './home/home.component';
import { MessageService } from './services/message.service';
import { AuthService } from './services/auth.service';
import { CarService } from './services/car.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CarComponent,
    CartComponent,
    OrderComponent,
    MessageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [MessageService, AuthService, CarService, CartService , OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
