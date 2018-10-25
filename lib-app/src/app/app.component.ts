import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Jalak';


  ngOnInit (){
      setTimeout(() => {
          this.name="Vora "
      }, 2000);
  }
}
