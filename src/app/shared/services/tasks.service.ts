import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '@shared/services/utility.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private objHttpService: HttpClient,
    private objUtiliyService: UtilityService) { }

  getEmployeeTasksList(intUserID: string): Observable<any> {
    const strUrl = this.objUtiliyService.getEndPoints('tasks', 'get_user_tasks').replace('{userId}', intUserID);
    return this.objHttpService.get(strUrl);
  }

  saveNewEmployeeTask(arrEmployeeeList: any[], intEmployeeId:number, objNewEmployeeTask) {
    arrEmployeeeList.unshift({
      "userId": intEmployeeId,
      "id": Math.random(),
      "title": objNewEmployeeTask.strTaskDetails,
      "completed": false
    })
    return JSON.parse(JSON.stringify(arrEmployeeeList)); 
  }
}
