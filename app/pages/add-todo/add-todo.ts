import {Page, NavParams, NavController} from 'ionic-framework/ionic';
import {TodoService} from '../../providers/todo-service/todo-service';
import {TodoPage} from '../todo-page/todo-page';

@Page({
  templateUrl: 'build/pages/add-todo/add-todo.html'
})
export class AddTodoPage {
  title;
  description;
  todoPage;

  constructor(public params: NavParams, public nav: NavController){
    this.todoPage = params.get('todoPage');
  }

  createTodo(title, description){
    this.todoPage.todoService.add(title, description);
    this.nav.pop();
  }
}
