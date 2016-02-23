import {Page, NavController} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/todo-page/todo-page.html'
})
export class TodoPage {
  items = ['item1', 'item2'];
}
