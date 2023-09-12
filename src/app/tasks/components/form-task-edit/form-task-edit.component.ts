import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/core/enums/status';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-form-task-edit',
  templateUrl: './form-task-edit.component.html',
  styleUrls: ['./form-task-edit.component.scss'],
})
export class FormTaskEditComponent {
  @Input() task!: Task;
  @Output()
  public form!: FormGroup;
  @Output() submitted = new EventEmitter();
  @Output() deleted = new EventEmitter();

  public states = Object.values(Status);
  public isHidden = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tasksService: TasksService
  ) {
    // console.log(this.task)
  }

  ngOnInit() {
    console.log(this.task);
    this.form = this.fb.group({
      titre: [this.task.titre],
      status: [this.task.status],
      id: [this.task.id],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
    this.router.navigate(['tasks']);
  }

  onAction() {
    this.isHidden = false;
  }

  onCancel() {
    this.isHidden = true;
  }

  onDelete() {
    console.log(this.task.id, 'test');
    this.deleted.emit(this.task.id)
  }
}
