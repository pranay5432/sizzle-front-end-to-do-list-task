import {observable} from "mobx";
import {v4 as uuidv4} from "uuid";

export class ListItem {
    @observable value: string
    @observable done: any
    id: string

    constructor (value: string) {
        this.id = uuidv4()
        this.value = value
    }
}
