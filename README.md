

[![NPM](https://nodei.co/npm/ngx-lazyload-image.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ngx-lazyload-image/)

LazyLoad Image source using directive in Angular.

## Installation

```shell
npm i ngx-lazyload-image --save
```

## Changelog

See the [releases page](https://github.com/jkvora/ngx-lazyload-image/releases) on GitHub.


## Usage

Add `LazyLoadImagesModule` to your app module:

```typescript
import { LazyLoadImagesModule } from 'ngx-lazyload-image';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LazyLoadImagesModule],
  bootstrap: [AppComponent],
})
class AppModule {}
```

In your app component, simply use    a `[lazyload]` directive input,  in place [src] in image tag.
```typescript
@Component({
  selector: 'app',
  template: `
    <div *ngFor="let item of lstImagesUrls;let i=index">
        <img  class="preview" [lazyload]="item.src" (imageInViewEvent)="inView(i)" (imageInViewLoadedEvent)="imageLoaded(i)"            alt="Nature Images" />
        <div class="box" *ngIf="!item.loaded"></div>
    </div>
  `
})
class AppComponent {
  private lstImagesUrls = [
    {
      src: "https://images.unsplash.com/photo-1538390019947-079c808a7315?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f59ae7d8274156b78fc89a2a223f93a3&auto=format&fit=crop&w=668&q=80",
      loaded: false
    },
   
    {
      src: "https://images.unsplash.com/photo-1538215062820-0b0097c60c5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=762ae8c9e9c39ee9ea9c7dd50b3c710f&auto=format&fit=crop&w=772&q=80",
      loaded: false
    },
    {
      src:"https://images.unsplash.com/photo-1538238766844-22cd13f6737a?ixlib=rb-0.3.5&s=af15e80003b63cccfb88bef91e3edb46&auto=format&fit=crop&w=889&q=80",
      loaded: false
    },
  ]


  inView(index) {
    console.log("In view:", index);
    this.lstImagesUrls[index].loaded=true;
  }

  imageLoaded(index) {
    console.log("Image loaded:", index)
   
  }
}
```

## Options

### Inputs

| Property name | Type  | Description |
| ------------- | ---- | ----------- |
| lazyload | string | Source of the image which is to be lazyloaded. 


#### Outputs

| Property name | Description |
| ------------- | ------------------ |
| imageInViewEvent  | Emitted when image comes in viewport |
| imageInViewLoadedEvent  | Emitted when image is loaded .( do thinsg like hide placeholder). |


