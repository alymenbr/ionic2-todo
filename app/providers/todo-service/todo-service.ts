import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
  todos;

  constructor(){
      this.todos = [
        {title: 'Titulo 1', description: 'Descrição 1', completed: false, secondary: function(){return 'secondary'}},
        {title: 'Titulo 2', description: 'Descrição 2', completed: false},
        {title: 'Titulo 3', description: 'Descrição 3', completed: false},
        {title: 'Titulo 4', description: 'Descrição 4', completed: false}
      ];
  }

  get(){
    return this.todos;
  }

  remove(index){
    this.todos.splice(index, 1);
  }

  add(newTitle, newDescription){
    this.todos.push( {title: newTitle, description: newDescription, completed: false} );
  }
}
