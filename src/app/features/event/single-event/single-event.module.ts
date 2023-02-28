import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { singleEventReducer } from './store/single-event.reducer';
import { RouterModule } from '@angular/router';
import { SingleEventComponent } from './single-event.component';
import { CowLoaderComponent } from '@shared/loader/cow-loader.component';
import { ErrorComponent } from '@shared/error.component';
import { SettingsComponent } from '@shared/settings/settings.component';
import { singleEventResolver } from './single-event.resolver';

@NgModule({
  declarations: [SingleEventComponent],
  imports: [
    CommonModule,
    ErrorComponent,
    CowLoaderComponent,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    SettingsComponent,
    StoreModule.forFeature('singleEvent', singleEventReducer),
    RouterModule.forChild([
      {
        path: '',
        component: SingleEventComponent,
        resolve: { singleEventResolver },
      },
    ]),
  ],
})
export default class SingleEventModule {}
