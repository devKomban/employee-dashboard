import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

      /**
       * if request url contines the matching string then block the req and handle
       * its operation here itself rest of the request is allowed to pass through
       */
    function handleRoute() {
      switch (true) {
        case url.endsWith('/user/authenticate') && method === 'POST':
          return checkIfUserIsAuthentic();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    /**
     * Check if user authentic user and if yes then returns a auth token
     *  else throw error
     */
    function checkIfUserIsAuthentic() {
      const { strUserName, strPassword } = body;
      if (strUserName !== 'fingent' || strPassword !== 'fingent') 
        return error('incorrect username or password');
  
      return ok({
        strUsername: 'fingent',
        strAuthToken: '95+9s6ad5f9+sa5d++sadf5+9v2fasdfsadf4545151'
      })
    }

    // helper functions

    /**
     * generates ok response
     * @param body 
     */
    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }))
    }

  /**
   * Generates error response
   * @param message 
   */
    function error(message) {
      return throwError({ error: { message } });
    }
  }
}

/**
 * Constant that can be used in module providers directly
 */
export const FAKER_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakerInterceptor,
  multi: true
};
