import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/core/enums/status';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-page-list-tasks',
  templateUrl: './page-list-tasks.component.html',
  styleUrls: ['./page-list-tasks.component.scss'],
})
export class PageListTasksComponent {
  public datas!: Task[];

  constructor(private tasksService: TasksService, private router: Router) {
    this.tasksService.getTasks().subscribe((data) => {
      console.log(data);
      this.datas = data;
    });
  }

  onAdd(task: Task) {
    this.tasksService.postTasks(task).subscribe((data) => {
      console.log(data);
      // this.datas.unshift(data);
      this.datas = [...this.datas, data];
    });
  }

  onTicked(task: Task) {

    if (task.status === 'TERMINE') {
      task.status = Status.EN_COURS;
      console.log(task);
      this.tasksService.updateTask(task).subscribe()
      // appel
    } else {
      task.status = Status.TERMINE;
      console.log(task);
      this.tasksService.updateTask(task).subscribe();
    }
  }

  goToEdit(task: Task){
    console.log(task);
    this.router.navigate(['tasks','edit', task.id])
  }
}
