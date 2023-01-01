import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mv-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  public links = [
    {
      path: '/movies',
      title: 'Movies',
    },
    {
      path: '/talents',
      title: 'Talents',
    },
    {
      path: '/moods',
      title: 'Moods',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
