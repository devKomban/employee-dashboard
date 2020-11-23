import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { UtilityService } from '@shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private objHttpService: HttpClient,
              private objUtiliyService: UtilityService) { }

  /**
   * Check if user authentic user and if yes then returns a auth token
   * else throw error
   * @param objAuthDetails 
   */
  authenticateUser(objAuthDetails: { strUserName:string, strPassword: string }): Observable<any> {
    const strUrl = this.objUtiliyService.getEndPoints('auth', 'authenticate_user');
    return this.objHttpService.post(strUrl, objAuthDetails);    
  }

  /**
   * Set necessary authentication details from server in browser localstorage
   * @param objAuth 
   */
  setAuthDetails(objAuth: { strAuthToken: string, strUsername:string }) {
    const { strAuthToken, strUsername } = objAuth;
    localStorage.setItem('strAuthToken', strAuthToken);
    localStorage.setItem('strUsername', strUsername);
  }

  /**
   * Remove all authentication details from browser localstorage
   */
  removeAuthDetails() {
    localStorage.removeItem('strAuthToken');    
    localStorage.removeItem('strUsername');    
  }

}
