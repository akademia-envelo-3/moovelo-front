import { Component } from '@angular/core';
import { CowLoaderComponent} from '@shared/loader/cow-loader.component';

@Component({
    selector: 'app-theme',
    standalone: true,
    template: ` <h1>Storybook-like route</h1>
    <app-cow-loader> </app-cow-loader>
  `, 
    imports: [CowLoaderComponent]
})
export default class ThemeComponent {}
