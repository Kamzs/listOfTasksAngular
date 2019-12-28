import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private rendered: Renderer2) { }
  ngOnInit(): void {
    let li = this.el.nativeElement;
    this.rendered.setStyle(li, 'list-style-image', 'url(/assets/like.png)');
  }
}
