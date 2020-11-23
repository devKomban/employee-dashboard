import { Component, OnInit, Inject, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { iEvent } from '@shared/models';

@Component({
  selector: 'app-add-task-p',
  templateUrl: './add-task-p.component.html',
  styleUrls: ['./add-task-p.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskPComponent {

  @Output() pEvent = new EventEmitter<iEvent>();
  
  /**
   * Form object
   */
  addTaskForm = this.objFB.group({
    strTaskDetails: ['', Validators.required]
  })

  constructor(private objFB: FormBuilder) { }

  /**
   * Add new task for current employee
   */
  addTask() {
    if (!this.addTaskForm.valid)
      return
    
    this.pEvent.emit({
      operation: 'SAVE_TASK',
      data: this.addTaskForm.value
    })
  }

}
