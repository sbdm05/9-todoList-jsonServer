import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Task } from 'src/app/core/models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  configUrl: string = 'http://localhost:3010/tasks';
  // observable pour stocker le tableau
  collection$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.configUrl);
  // }

  refreshCollection() {
    this.http.get<Task[]>(this.configUrl).subscribe((data) => {
      this.collection$.next(data);
    });
  }
  
  // deuxième écriture
  // refreshCollection(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.configUrl).pipe(
  //     tap((data) => {
  //       this.collection$.next(data);
  //     })
  //   );
  // }

  postTasks(task: Task): Observable<Task> {
    return this.http.post<Task>(this.configUrl, task).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
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
