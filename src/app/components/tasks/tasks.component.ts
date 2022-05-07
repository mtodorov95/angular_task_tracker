import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private tasksService:TaskService) { }

  ngOnInit(): void {
  this.tasksService.getTasks().subscribe((tasks) => {
    this.tasks = tasks;
  });
  }

  deleteTask(task:Task):void{
    this.tasksService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(t => t.id != task.id);
    });
  }

  toggleReminder(task:Task):void{
    task.reminder = !task.reminder;
    this.tasksService.updateTask(task).subscribe();
  }

  addTask(task:Task):void{
    this.tasksService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

}
