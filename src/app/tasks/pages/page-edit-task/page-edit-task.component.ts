import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-page-edit-task',
  templateUrl: './page-edit-task.component.html',
  styleUrls: ['./page-edit-task.component.scss'],
})
export class PageEditTaskComponent {
  public task!: Task;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private router : Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id) {
      // appel vers service

      this.tasksService.getTaskById(id).subscribe((data) => {
        console.log(data);
        this.task = data;
      });
    }
  }

  onEdit(task: Task) {
    this.tasksService.updateTask(task).subscribe();
  }

  onDelete(id: number){
    this.tasksService.onDelete(id).subscribe(()=>{
      console.log('effacé');
      this.router.navigate([''])
    })
  }
}
