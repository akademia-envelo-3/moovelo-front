import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loaderhandler.service';
import { NO_LOADER_PARAM } from './requestHelperForLoader';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private loaderService = inject(LoaderService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const showLoader = !request.urlWithParams.includes(NO_LOADER_PARAM);
    if (request.method == 'GET' && showLoader) {
      this.loaderService.show();
    }

    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
