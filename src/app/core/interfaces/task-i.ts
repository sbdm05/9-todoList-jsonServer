import { Status } from '../enums/status';

export interface TaskI {
  titre: string;
  status: Status;
  id: number;
}
