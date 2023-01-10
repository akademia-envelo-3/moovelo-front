import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-cow-loader> </app-cow-loader>
  <router-outlet></router-outlet>
  `,
  providers: [],
})
export class AppComponent {}
