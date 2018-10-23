import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImage } from './lazy-load-image/lazy-load-image.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [LazyLoadImage],
    exports: [LazyLoadImage]
})
export class LazyLoadImagesModule { }
