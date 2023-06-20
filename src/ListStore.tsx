import { observable, action, computed } from "mobx"
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
 
  @action deleteList = (list: any) => {
    this.lists = this.lists.filter(t => t !== list)
  }

  @computed get filteredLists () {
    const matchCase = new RegExp(this.filter, "i")
    return this.lists.filter(list=> !this.filter || matchCase.test(list.value))
  }
}
