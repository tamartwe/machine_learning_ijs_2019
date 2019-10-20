import { Component, OnInit, Input } from '@angular/core';
import { ImageContainer } from '../image-container';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input() image: ImageContainer;

  constructor(private imagesService: ImagesService) { 
  }

  ngOnInit() {
  }

  getPrediction() {
    console.log('start get prediction component detail, sending ' + this.image.path);
    this.imagesService.getPrediction(this.image.path)
    .subscribe((prediction) => { 
      console.log('got prediction ' + JSON.stringify(prediction));
      this.image.prediction = prediction.result
    });
  }

}
