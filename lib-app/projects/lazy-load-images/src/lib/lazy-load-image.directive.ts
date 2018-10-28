import { Directive, ElementRef, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Directive({
    selector: '[lazyload]'
})
export class LazyLoadImageDirective implements OnInit,OnDestroy {


    /**
     * Get the source of image
     */
    @Input("lazyload") lazysrc;

    /**
     * Event emitter for image in view event
     */
    @Output() imageInViewEvent = new EventEmitter();

    /**
     * Event emitter when image gets loaded
     */
    @Output() imageInViewLoadedEvent = new EventEmitter();

    constructor(private _element: ElementRef) {
        
    }

    ngOnInit() {
        if ('IntersectionObserver' in window) {
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
            let observer = new IntersectionObserver(this.imageInView.bind(this), options);
            observer.observe(this._element.nativeElement);
        }
    }

    imageInView(entries, observe) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //Emit in view event
                this.imageInViewEvent.emit();

                //If source is different add onload event
                if (this.lazysrc != this._element.nativeElement.src) {
                    this._element.nativeElement.onload = this.imageLoaded.bind(this);
                }
                this._element.nativeElement.src = this.lazysrc;
            }
        });

    }

    imageLoaded(event) {
        this.imageInViewLoadedEvent.emit();
        this._element.nativeElement.onload=null;
    }

    ngOnDestroy(){
        this._element.nativeElement.onload=null;
    }

}