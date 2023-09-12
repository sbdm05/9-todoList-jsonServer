import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';

const routes: Routes = [
  { path: '', component: PageListTasksComponent },
  { path: 'edit/:id', component: PageEditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
