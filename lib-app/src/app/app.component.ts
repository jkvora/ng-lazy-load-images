import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private name = 'Jalak';
  private lstImagesUrls: string[] = [
    "https://images.unsplash.com/photo-1538390019947-079c808a7315?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f59ae7d8274156b78fc89a2a223f93a3&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1538330447121-4c41b85862f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f20830b4b382e5ee1aaa42b50d8c62b0&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1538329418642-bef8dcb9f2aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90e0e7f6b76159a0a83a94a8bb4aa0ea&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1538592487700-be96de73306f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=848b04992148fe8218e979c9ca976036&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1538215062820-0b0097c60c5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=762ae8c9e9c39ee9ea9c7dd50b3c710f&auto=format&fit=crop&w=772&q=80",
    "https://images.unsplash.com/photo-1538238766844-22cd13f6737a?ixlib=rb-0.3.5&s=af15e80003b63cccfb88bef91e3edb46&auto=format&fit=crop&w=889&q=80"
  ]


  ngOnInit() {
    setTimeout(() => {
      this.name = "Vora "
    }, 2000);
    
  }

  inView(index){
    console.log("In view:",index);
  }

  imageLoaded(index){
    console.log("Image loaded:",index)
  }
}
