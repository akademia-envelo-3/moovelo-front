import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { API_URL, IS_PRODUCTION } from '@core/env.token';
import { environment } from 'src/environment';
import { RouterModule } from '@angular/router';
import { noProductionGuard } from '@shared/no-production.guard';

import { SingleEventStateInterface } from './features/event/single-event/single-event.interface';
import { MatButtonModule } from '@angular/material/button';
import { AppInputValidatorDirective } from '@shared/inputValidator.directive';

import { LoaderInterceptor } from '@shared/Interceptor/loader-interceptor.interceptor';
import { ErrorhandlerInterceptor } from '@shared/Interceptor/errorhandler.interceptor';

import { MatIconModule } from '@angular/material/icon';
import { UserState } from './features/auth/store/user.interface';
import { Error404Component } from '@shared/error404/error404.component';
import { AuthService } from './features/auth/authentication/auth.service';
import { CanLoginGuard } from './features/auth/guards/can-login.guard';
import { fetchedLoggedUser } from './features/auth/fetchLoggedUser';
import { userReducer } from './features/auth/store/user.reducer';

export interface AppState {
  user: UserState;
}

export interface AppState {
  singleEvent: SingleEventStateInterface;
}
@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorhandlerInterceptor,
      multi: true,
    },
    {
      provide: API_URL,
      useValue: environment.API_URL,
    },
    {
      provide: IS_PRODUCTION,
      useValue: environment.production,
    },
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: fetchedLoggedUser,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    AppInputValidatorDirective,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({ user: userReducer }),
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
            canActivate: [CanLoginGuard],
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
