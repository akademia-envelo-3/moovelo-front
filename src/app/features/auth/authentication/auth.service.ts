import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = Inject(HttpClient);
  httpHeaders = Inject(HttpHeaders);
  httpErrorReponse = Inject(HttpErrorResponse);

  endpoint = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  logIn(email: string, password: string) {
    console.log(email, password);
  }
}
