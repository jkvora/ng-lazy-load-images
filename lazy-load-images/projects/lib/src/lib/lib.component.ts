import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngxlib-lib',
  template: `
    <p>
      lib works!
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
