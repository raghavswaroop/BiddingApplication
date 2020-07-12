import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../Shared/Image.Service';


@Component
  ({
    selector: 'app-imagerenderer',
    templateUrl: './imageRenderer.component.html',
    styleUrls: ['./imageRenderer.component.css']

  })

export class ImageRendererComponent implements OnInit {
  images: any[];
  value: String = 'Clear me';
  public searchkeytag:String
  constructor(private _imageService: ImageService) {

    

  }

  handlesucess(data) {
    this.images = data.hits;
    console.log(data.hits);
  }

  searchimage(searchkeytag) {
    this._imageService.getimage(searchkeytag).subscribe(
      data => this.handlesucess(data),
      error => console.log(error),
      () => console.log('RequestComplete'))

  }


  ngOnInit() {

  }
}
