import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '@shared/services/utility.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private objHttpService: HttpClient,
              private objUtiliyService: UtilityService) { }
  
  /**
   * Get employee list from server
   */
  getEmployeeList(): Observable<any> {
    const strUrl = this.objUtiliyService.getEndPoints('dashboard', 'get_user')
    return this.objHttpService.get(strUrl);
  }
}
