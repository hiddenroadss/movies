import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ThemePalette } from '../../types';

const styles: { [key in ThemePalette]: string } = {
  accent: 'bg-teal-500 border-transparent text-white disabled:bg-slate-300',
  primary: '',
  secondary: 'border-slate-300',
};

@Component({
  selector: 'button[mv-button], button[mv-raised-button]',
  exportAs: 'mvButton',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent implements OnInit {
  private _color: ThemePalette;
  defaultColor: ThemePalette;

  get color(): ThemePalette {
    return this._color;
  }
  @Input()
  set color(value: ThemePalette) {
    const colorPalette = value || this.defaultColor;

    if (colorPalette !== this._color) {
      if (this._color) {
        this._elementRef.nativeElement.classList.remove(
          ...styles[this._color].split(' '),
        );
      }
      if (colorPalette) {
        this._elementRef.nativeElement.classList.add(
          ...styles[colorPalette].split(' '),
        );
      }

      this._color = colorPalette;
    }
  }
  constructor(private _elementRef: ElementRef) {
    _elementRef.nativeElement.classList.add(
      'border',
      'rounded-md',
      'font-medium',
      'text-sm',
      'py-2',
      'px-4',
    );
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'a[mv-button], a[mv-raised-button]',
  exportAs: 'mvButton, mvAnchor',
  templateUrl: './button.component.html',
  styles: [],
})
export class AnchorComponent extends ButtonComponent {}
