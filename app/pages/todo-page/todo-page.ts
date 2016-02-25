import {Page, NavController} from 'ionic-framework/ionic';
import {TodoService} from '../../providers/todo-service/todo-service';

@Page({
  providers: [TodoService],
  templateUrl: 'build/pages/todo-page/todo-page.html'
})
export class TodoPage {
  todos;

  constructor(todoService: TodoService) {
    this.todos = todoService.get();
  }
}
