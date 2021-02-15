import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[userStyle]'
})

export class UserStyleDirective {

    @Input('userStyle') color:string = null
    @Input() fontWeight:string = null
    @Input() backgroundColor: string = 'white'
    constructor(private elRef: ElementRef, private ren2: Renderer2){
    }

    @HostListener('mouseenter') onEnter(){
        this.ren2.setStyle(this.elRef.nativeElement, 'color', this.color)
        this.ren2.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight)
        this.ren2.setStyle(this.elRef.nativeElement, 'backgroundColor', this.backgroundColor)
        
    }


    @HostListener('mouseleave') onLeave(){
        this.ren2.setStyle(this.elRef.nativeElement, 'color', null)
        this.ren2.setStyle(this.elRef.nativeElement, 'fontWeight', null)
        this.ren2.setStyle(this.elRef.nativeElement, 'backgroundColor', null)
    }
}