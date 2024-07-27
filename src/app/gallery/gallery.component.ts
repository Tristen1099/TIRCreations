import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery = new Array();

  public classReference = GalleryComponent;

  constructor() { }

  ngOnInit() {
    this.gallery = this.createGalleryArray();
  }

  ngAfterViewInit() {

  }

  createGalleryArray() {
    var tempGallery = new Array();

    for (let index = 1; index <= 15; index++) {
      let item = {
        src: `../../assets/Gallery/item-${index}.png`,
        alt: `Gallery Item ${index}`
      }
      tempGallery.push(item);
    }

    return tempGallery;
  }

}