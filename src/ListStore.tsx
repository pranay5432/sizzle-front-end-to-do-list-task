import {observable, action, makeAutoObservable} from "mobx"
import { ListItem } from "./components/ListItem";

export class ListStore {

  list: ListItem[] = []

  @action addItem = (value: string) => {
    this.list.push(new ListItem(value))
  }
 
  @action deleteItem = (item: ListItem) => {
    this.list = this.list.filter(t => t !== item)
  }
}
