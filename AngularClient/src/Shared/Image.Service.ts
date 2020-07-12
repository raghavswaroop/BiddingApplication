import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';



@Injectable(



)

export class ImageService {

  private query: string;
  private API_KEY: string = environment.PIXBAY_API_KEY;
  private API_URL: string = environment.PIXBAY_API_URL;
  private URL: string = this.API_URL+this.API_KEY + '&q=';

  constructor(private _http: HttpClient) { }


  getimage(query) :Observable<any> {
  
   return  this._http.get<any>(this.URL + query)
  }
}
