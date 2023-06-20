import * as React from 'react'

import List from "./List"
import { observer } from 'mobx-react'
import { ListStore } from "../ListStore"

interface ListDisplayProps {
    store: ListStore
}

export const ListDisplay = observer(function(props: ListDisplayProps) {
  const { deleteList, filteredLists } = props.store

  return (
    <div>
        <div className="container">
          {filteredLists.map((list) => (
            <List key={list.id} list={list}  deleteList={deleteList} />
          ))}
        </div>
    </div>
  )
})
