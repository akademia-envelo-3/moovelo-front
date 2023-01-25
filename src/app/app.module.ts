import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { API_URL, IS_PRODUCTION } from '@core/env.token';
import { environment } from 'src/environment';
import { RouterModule } from '@angular/router';
import { noProductionGuard } from '@shared/no-production.guard';
import { AppInputValidatorDirective } from '@shared/inputValidator.directive';
import { MatIconModule } from '@angular/material/icon';
import { UserState } from './features/auth/store/user.interface';
import { Error404Component } from '@shared/error404/error404.component';

export interface AppState {
  User: UserState;
}

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: API_URL,
      useValue: environment.API_URL,
    },
    {
      provide: IS_PRODUCTION,
      useValue: environment.production,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    AppInputValidatorDirective,
    BrowserModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./features/home/home.module'),
          },
          {
            path: 'auth',
            loadChildren: () => import('./features/auth/auth.module'),
          },
          {
            path: 'theme',
            canMatch: [noProductionGuard],
            loadComponent: () => import('./core/theme.component'),
          },
          {
            path: '**',
            component: Error404Component,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
