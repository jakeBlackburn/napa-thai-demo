import { Component, OnInit} from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

const fadeIn = trigger('fadeIn', [
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),
  transition('false => true', animate(1000)),
  transition('true => false', animate(100))
])
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  animations: [
    fadeIn
  ]
})
export class PhotosComponent implements OnInit {
  isAnimating = true;
  photoUrl = '../../assets/images/gallery-image-1.webp';
  photoId = 1;
  upperLimit = 3;

  ngOnInit(): void {
    setInterval(() => {
      this.incrementImage()
    }, 6000)
  }

  incrementImage() {
    this.isAnimating = false
    if (this.photoId == this.upperLimit) {
      this.photoId = 1
    } else {
    this.photoId = this.photoId + 1
    }
  }

  getBackgroundImage() {
    return `../../assets/images/gallery-image-${this.photoId}.webp`
  }
}
