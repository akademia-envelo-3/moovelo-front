import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { LoaderService } from './interceptor-service.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  loaderService = inject(LoaderService);
  private requests: HttpRequest<any>[] = [];

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requests.push(req);
    this.loaderService.isLoading.next(true);
    return next.handle(req);
    // return Observable.create(observer => {
    //   // And subscribe to the original observable to ensure the HttpRequest is made
    //   const subscription = next.handle(req)
    //     .subscribe(
    //     event => {
    //       if (event instanceof HttpResponse) {
    //         this.removeRequest(req);
    //         observer.next(event);
    //       }
    //     },
    //     err => { this.removeRequest(req); observer.error(err); },
    //     () => { this.removeRequest(req); observer.complete(); });
    //   // return teardown logic in case of cancelled requests
    //   return () => {
    //     this.removeRequest(req);
    //     subscription.unsubscribe();
    //   };
    // });
  }
}
