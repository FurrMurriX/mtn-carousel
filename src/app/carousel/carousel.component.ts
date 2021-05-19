import { Component, OnInit } from '@angular/core';

// Glide
import Glide from '@glidejs/glide';

// Import GSAP
// import { gsap, TweenMax } from "gsap";
// import { Draggable } from "gsap/Draggable";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {

    var glideMulti1 = new Glide('.multi1', {
      type: 'carousel',
      focusAt: 'center',
      keyboard: true,
      gap: 15,
      perView: 5,
      breakpoints: {
        1600: {
          perView: 3
        },
        1024: {
          perView: 2
        },
        600: {
          perView: 1
        }
      }
    });

    glideMulti1.mount();

  }

}
