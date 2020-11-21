import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-task-p',
  templateUrl: './add-task-p.component.html',
  styleUrls: ['./add-task-p.component.scss']
})
export class AddTaskPComponent implements OnInit {

  addTaskForm = this.objFB.group({
    strTaskDetails: ['']
  })



  constructor(private objFB: FormBuilder) { }

  ngOnInit(): void {
  }

}
