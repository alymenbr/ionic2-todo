import {Page, NavParams, NavController} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/todo-details/todo-details.html'
})
export class TodoDetailsPage {
  todo;
  index;
  todoPage;
  isEditing;

  constructor(public params: NavParams, public nav: NavController){
    this.todo = params.get('todo');
    this.index = params.get('index');
    this.todoPage = params.get('todoPage');
    this.isEditing = false;
  }

  deleteTodo(){
    this.todoPage.todoService.remove(this.index);
    this.goBack();
  }

  goBack(){
    this.nav.pop();
  }
}
