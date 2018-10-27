import { Directive, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit, OnInit } from '@angular/core';

@Directive({
    selector: '[lazyload]'
})
export class LazyLoadImageDirective implements OnChanges, AfterViewInit, OnInit {


    @Input("lazyload") lazysrc;

    constructor(private _element: ElementRef) {
        console.log(this.lazysrc);
    }

    ngOnInit() {
        if ('IntersectionObserver' in window) {
            let options={
                root:null,
                rootMargin: '0px',
                threshold: 1.0
            }
            let observer = new IntersectionObserver(this.imageLoaded.bind(this),options);
            observer.observe(this._element.nativeElement);
        }
    }


    ngOnChanges(changes: SimpleChanges) {
        
    }

    ngAfterViewInit() {

    }

    imageLoaded(entries,observe) {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                this._element.nativeElement.src=this.lazysrc;
            }
        });
        // if (data[0].isIntersecting) {
        //     this._element.nativeElement.src = this.lazysrc;
        // }

    }
}