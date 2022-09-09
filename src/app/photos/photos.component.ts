import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photoUrl = '../../assets/images/gallery-image-1.png';
  photoId = 1;
  upperLimit = 4;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.incrementImage()
    }, 3500)
  }

  incrementImage() {
    if (this.photoId == this.upperLimit) {
      this.photoId = 1
    } else {
    this.photoId = this.photoId + 1
    }
  }


  decrementImage() {
    if (this.photoId == 1) {
      this.photoId = this.upperLimit
    } else {
      this.photoId = this.photoId - 1
    }

  }

  getBackgroundImage() {
    return `../../assets/images/gallery-image-${this.photoId}.webp`
  }


}
