import {Page, NavController} from 'ionic-framework/ionic';
import {TodoPage} from '../todo-page/todo-page';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public nav: NavController) {

  }

  openTodos(){
    this.nav.push(TodoPage);
  }
}
