import { Component, OnInit } from '@angular/core';

// Glide
import Glide from '@glidejs/glide';

@Component({
  selector: 'mtn-carousel',
  templateUrl: './mtn-carousel.component.html',
  styleUrls: ['./mtn-carousel.component.scss']
})
export class MtnCarouselComponent implements OnInit {

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
        1366: {
          perView: 5
        },
        1080: {
          perView: 3
        },
        600: {
          perView: 1
        }
      }
    });

    glideMulti1.mount();

  }

}
