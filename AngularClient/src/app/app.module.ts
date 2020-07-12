import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ImageRendererComponent } from './imageRenderer/imageRenderer.component'
import { HttpClientModule } from '@angular/common/http'
import { ImageService } from '../Shared/Image.Service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ImageRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
