import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-lazy-load-image',
  templateUrl: 'lazy-load-images.component.html',
  styles: []
})
export class LazyLoadImagesComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("Changes are:",changes);
  }

}
