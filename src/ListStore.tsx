import { observable, action, computed, makeObservable, autorun } from "mobx"
import { v4 as uuidv4 } from "uuid"

export class List {
  @observable value
  @observable done: any
  private id: any;

  constructor (value: any) {
    this.id = uuidv4()
    this.value = value
  }
}

export class ListStore {
  @observable lists: any[] = []
  @observable filter = ""

  @action addList = (value: any) => {
    this.lists.push(new List(value))
  }
  /* moveListToFront implements the pinning functionality. It takes the list that is passed in and moves it to the front of the list
  through deleting the to do task and adding it to the front of the list.
  */
  @action moveListToFront = (list: any) => {
    this.lists = this.lists.filter(t => t !== list)
    this.lists.unshift(list)
  }
 
  @action deleteList = (list: any) => {
    this.lists = this.lists.filter(t => t !== list)
  }

  @computed get filteredLists () {
    const matchCase = new RegExp(this.filter, "i")
    return this.lists.filter(list=> !this.filter || matchCase.test(list.value))
  }
  /*Adding the constructor essentially allows the ListStore class to become observable. Everytime the list changes,
  the filteredLists calculation happens.
  */

  constructor() {
    makeObservable(this);
    autorun(() => console.log(this.filteredLists));
  }
}
