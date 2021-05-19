import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtnCarouselComponent } from './mtn-carousel.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MtnCarouselComponent],
    exports: [MtnCarouselComponent]
})
export class MtnCarouselModule {
}
