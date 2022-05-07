import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string = "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
