import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TalentsApiService } from '../../../core/services/talents-api/talents-api.service';

@Component({
  selector: 'mv-talents-create',
  templateUrl: './talents-create.component.html',
  styles: [],
})
export class TalentsCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    birthDate: new FormControl(null, [Validators.required]),
    poster: new FormControl(null),
    bio: new FormControl('', [Validators.required]),
    movies: new FormControl([]),
    country: new FormControl(null),
  });

  percentDone = 0;

  constructor(private talentsApi: TalentsApiService) {}

  ngOnInit(): void {}

  save() {
    const talent = {
      ...this.form.value,
    };
    delete talent.poster;

    this.talentsApi.create(talent).subscribe((response) => {
      // this.progress = 0;
      this.form.reset();
      // do something with the response
    });
  }
}
