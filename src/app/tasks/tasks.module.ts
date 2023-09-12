import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { FormTaskEditComponent } from './components/form-task-edit/form-task-edit.component';


@NgModule({
  declarations: [
    PageListTasksComponent,
    FormTaskComponent,
    PageEditTaskComponent,
    FormTaskEditComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
