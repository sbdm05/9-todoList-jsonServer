import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/core/models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  configUrl: string = 'http://localhost:3010/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.configUrl);
  }

  postTasks(task: Task): Observable<Task> {
    return this.http.post<Task>(this.configUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.configUrl}/${task.id}`, task);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.configUrl}/${id}`);
  }

  onDelete(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.configUrl}/${id}`);
  }
}
