import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
})
export class FormTaskComponent {
  public form!: FormGroup;
  public task: Task = new Task();
  @Output() submitted = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      titre: [
        this.task.titre,
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
      status: [this.task.status],
      id: [this.task.id],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value)
  }
}
