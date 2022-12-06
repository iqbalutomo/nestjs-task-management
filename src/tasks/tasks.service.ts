import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'NestJS Cool!',
      description: 'Learning NestJS Zero to Hero',
    },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
