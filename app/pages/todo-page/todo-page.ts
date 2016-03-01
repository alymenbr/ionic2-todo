import {Page, NavController} from 'ionic-framework/ionic';
import {TodoService} from '../../providers/todo-service/todo-service';
import {TodoDetailsPage} from '../todo-details/todo-details';
import {AddTodoPage} from '../add-todo/add-todo';

@Page({
  providers: [TodoService],
  templateUrl: 'build/pages/todo-page/todo-page.html'
})
export class TodoPage {
  todos;

  constructor(public todoService: TodoService, public nav: NavController) {
    this.todos = todoService.get();
  }

  todoDetails(event, openTodo, todoIndex){
    this.nav.push(TodoDetailsPage, {todo: openTodo, index: todoIndex, todoPage: this});
  }

  color(todo){
    return todo.completed? 'button button-default button-block button-primary' : '';
  }

  addTodo(){
    this.nav.push(AddTodoPage, {todoPage: this});
  }
}
