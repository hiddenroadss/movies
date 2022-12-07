import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesApiService } from '../../../core/services/movies-api/movies-api.service';

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
    poster: new FormControl('', []),
    releaseDate: new FormControl('', [Validators.required]),
    country: new FormControl(''),
    budget: new FormControl(0),
    fees: new FormControl(0),
    description: new FormControl('', [Validators.required]),
    duration: new FormControl(0, [Validators.required]),
  });

  constructor(private moviesApi: MoviesApiService) {}

  ngOnInit(): void {}

  save() {
    this.moviesApi.create(this.form.value).subscribe();
  }
}
