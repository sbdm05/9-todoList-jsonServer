import { Status } from '../enums/status';
import { TaskI } from '../interfaces/task-i';

export class Task implements TaskI{
  titre!: string;
  status = Status.EN_COURS;
  id!: number;
  constructor(obj?: Partial<Task>){
    if(obj){
      Object.assign(this, obj)
    }
  }
}
