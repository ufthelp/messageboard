import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
var routes = [
  {
  path:"",
  component: HomeComponent
},
{
  path:"messages",
  component: MessagesComponent
  },
{
  path:"messages/:name",
  component: MessagesComponent
},
{
  path:"register",
  component: RegisterComponent
  },
];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, HttpModule, BrowserAnimationsModule, FormsModule,ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent ,MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent],
  bootstrap:    [ AppComponent ],
  providers: [ WebService]
})
export class AppModule { }
