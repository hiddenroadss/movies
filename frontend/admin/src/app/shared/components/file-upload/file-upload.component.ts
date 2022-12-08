import { Component, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mv-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor {
  file: File | null = null;

  onChangeCallback: any;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    this.file = event.item(0);
    if (this.host.nativeElement.multiple) {
      this.onChangeCallback(Array.from(event));

      // If the input is set to allow only a SINGLE file, then let's only push the
      // first file in the collection (or NULL if no file is available).
    } else {
      this.onChangeCallback(event.length ? event[0] : null);
    }
    console.log(event[0]);
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: null) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {}
}
