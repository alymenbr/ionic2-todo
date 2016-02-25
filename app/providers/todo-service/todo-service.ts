import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
  todos;

  constructor(){
    this.todos = [
        {title: 'Titulo1', completed: false},
        {title: 'Titulo2', completed: false},
        {title: 'Titulo3', completed: false},
        {title: 'Titulo4', completed: false}
    ];
  }

  get(){
    return this.todos;
  }
}
