import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TalentsApiService } from '../../../core/services/talents-api/talents-api.service';
import { requiredFileType } from '../../../shared/utils/required-file-type';
import { switchMap } from 'rxjs';
import { uploadProgress } from '../../../shared/utils/operators/upload-progress.operator';
import { toResponseBody } from '../../../shared/utils/operators/to-response-body.operator';

@Component({
  selector: 'mv-talents-create',
  templateUrl: './talents-create.component.html',
  styles: [],
})
export class TalentsCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    poster: new FormControl(null, [
      Validators.required,
      requiredFileType('png'),
    ]),
    bio: new FormControl('', [Validators.required]),
    movies: new FormControl(null),
  });

  percentDone = 0;

  constructor(private talentsApi: TalentsApiService) {}

  ngOnInit(): void {}

  save() {
    const talent = {
      ...this.form.value,
    };
    delete talent.poster;

    this.talentsApi
      .create(talent)
      .pipe(
        switchMap((value) => {
          return this.talentsApi.uploadPoster(
            { poster: this.form.value.poster },
            value.id,
          );
        }),
        uploadProgress((progress) => (this.percentDone = progress)),
        toResponseBody(),
      )
      .subscribe((response) => {
        // this.progress = 0;
        this.form.reset();
        // do something with the response
      });
  }
}
