import { Directive, ElementRef,HostListener, Input,OnInit } from '@angular/core';

@Directive({ selector: '[highlightme]' })
export class MyDirective implements OnInit {
    constructor(private el: ElementRef) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }

    ngOnInit(){
     this.highlight(this.defaultColor);
    }

@Input() defaultColor : string;

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight('yellow');


    }


    @HostListener('mouseleave') onMouseLeave(){
        this.highlight('green');


    }

    private highlight(color:string){

        this.el.nativeElement.style.backgroundColor=color;
    }
}