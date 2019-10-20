import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../image-list';
import { ImageContainer } from '../image-container';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images = IMAGES;
  selectedImage: ImageContainer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(image: ImageContainer): void {
    this.selectedImage = image;
  }

}
