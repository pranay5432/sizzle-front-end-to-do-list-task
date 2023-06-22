import * as React from 'react'
import { observer } from 'mobx-react'
import { ListItem } from "./ListItem";

interface ListItemProps {
    listItem: ListItem
    deleteItem: (item: ListItem) => void
}

function ListItemCard(props: ListItemProps) {
  return (
    <div className="card">
      <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <p className={`title ${props.listItem.done ? "text-secondary" : ""}`}>{props.listItem.value}</p>
            <div>
            <button onClick={props.deleteItem.bind(this, props.listItem)} className="btn btn-danger font-weight-bold py-2 px-5 ml-2">Delete</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default observer(ListItemCard)
