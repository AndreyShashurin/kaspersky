import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceService } from './services/interface.servise';
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    InterfaceService,
    FormService,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
