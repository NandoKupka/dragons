import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonsComponent } from './dragons/dragons.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewDragonComponent } from './view-dragon/view-dragon.component';
import { EditDragonComponent } from './edit-dragon/edit-dragon.component';
import { NewDragonComponent } from './new-dragon/new-dragon.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DragonsComponent,
    ViewDragonComponent,
    EditDragonComponent,
    NewDragonComponent,
    LoginComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
