import { Directive, Input, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextFormat]'
})
export class TextFormatDirective {
  @Input('appTextFormat') format: { isBold: boolean, isItalic: boolean, color: string } = { isBold: false, isItalic: false, color: ''};

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['format']) {
      this.applyStyles();
    }
  }

  private applyStyles() {
    const { isBold, isItalic, color } = this.format;
    this.element.nativeElement.style.fontWeight = isBold ? 'bold' : 'normal';
    this.element.nativeElement.style.fontStyle = isItalic ? 'italic' : 'normal';
    this.element.nativeElement.style.color = color || 'inherit';
  }

}
