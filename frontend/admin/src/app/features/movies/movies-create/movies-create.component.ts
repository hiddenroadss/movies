import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { MoviesApiService } from '../../../core/services/movies-api/movies-api.service';
import { toResponseBody } from '../../../shared/utils/operators/to-response-body.operator';
import { uploadProgress } from '../../../shared/utils/operators/upload-progress.operator';
import { requiredFileType } from '../../../shared/utils/required-file-type';

@Component({
  selector: 'mv-movies-create',
  templateUrl: './movies-create.component.html',
  styles: [],
})
export class MoviesCreateComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    originalTitle: new FormControl(''),
    slogan: new FormControl(''),
    poster: new FormControl(null, [
      Validators.required,
      requiredFileType('png'),
    ]),
    releaseDate: new FormControl('', [Validators.required]),
    country: new FormControl(''),
    budget: new FormControl(0),
    fees: new FormControl(0),
    description: new FormControl('', [Validators.required]),
    duration: new FormControl(0, [Validators.required]),
  });

  percentDone = 0;

  constructor(private moviesApi: MoviesApiService) {}

  ngOnInit(): void {}

  save() {
    console.log(this.form.value.poster);
    const movie = {
      ...this.form.value,
    };
    delete movie.poster;

    this.moviesApi
      .create(movie)
      .pipe(
        switchMap((value) => {
          return this.moviesApi.uploadPoster(
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
