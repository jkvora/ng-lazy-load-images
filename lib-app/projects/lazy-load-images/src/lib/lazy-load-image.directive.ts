import { Directive, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';



@Directive({
    selector: '[lazyload]'
})
export class LazyLoadImageDirective implements OnChanges, AfterViewInit, OnInit {


    @Input("lazyload") lazysrc;
    @Output() imageInViewEvent=new EventEmitter();
    @Output() imageInViewLoadedEvent=new EventEmitter();

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
            let observer = new IntersectionObserver(this.imageInView.bind(this),options);
            observer.observe(this._element.nativeElement);
        }
    }


    ngOnChanges(changes: SimpleChanges) {
        
    }

    ngAfterViewInit() {

    }

    imageInView(entries,observe) {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                this._element.nativeElement.src=this.lazysrc;
                this.imageInViewEvent.emit();
                this._element.nativeElement.onload=this.imageLoaded.bind(this);
            }
        });
        
    }

    imageLoaded(event){
        this.imageInViewLoadedEvent.emit();
    }


}