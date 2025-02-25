import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input() appFontSize: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.appFontSize);
  }

}
