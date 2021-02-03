import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') onHover(): void {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseout') onLeave(): void {
    this.backgroundColor = 'inherit';
  }

}
