import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  /**
   * Returns appropriate URL based on module name and url key
   * @param strModuleName 
   * @param strUrlKey 
   */
  getEndPoints(strModuleName: string, strUrlKey: string): string {
    return environment.endPoints[strModuleName][strUrlKey]
  }
}
