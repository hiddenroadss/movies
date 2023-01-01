import { Component } from '@angular/core';

@Component({
  selector: 'mv-root',
  template: `
    <mv-navbar></mv-navbar>
    <div class="w-2/3 mx-auto my-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'admin';
}
