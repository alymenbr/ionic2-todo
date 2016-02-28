import {Page, NavParams} from 'ionic-framework/ionic'

@Page({
  templateUrl: 'build/pages/todo-details/todo-details.html'
})
export class TodoDetailsPage {
  todo;

  constructor(public nav: NavParams){
    this.todo = nav.get('todo');
  }
}
