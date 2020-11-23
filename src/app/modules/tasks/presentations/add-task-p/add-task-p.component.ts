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
export class AddTaskPComponent implements OnInit {

  @Output() pEvent = new EventEmitter<iEvent>();
  
  addTaskForm = this.objFB.group({
    strTaskDetails: ['', Validators.required]
  })



  constructor(private objFB: FormBuilder) { }

  ngOnInit(): void {
    this.addTaskForm.get('strTaskDetails').valueChanges.subscribe(obj => {
      console.log({obj});
      
    })
  }

  addTask() {
    if (!this.addTaskForm.valid)
      return
    
    this.pEvent.emit({
      operation: 'SAVE_TASK',
      data: this.addTaskForm.value
    })
  }

}
