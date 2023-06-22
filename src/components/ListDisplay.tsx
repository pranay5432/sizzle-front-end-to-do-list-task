import * as React from 'react'

import { observer } from 'mobx-react'
import { ListStore } from "../ListStore"
import ListItemCard from "./ListItemCard";

export const ListDisplay = observer((props: { store: ListStore }) => {
    console.log("list observed change")

    return (
        <div>
            <div className="container">
                {
                    props.store.list.map((listItem) => (
                        <ListItemCard key={listItem.id} listItem={listItem}  deleteItem={props.store.deleteItem} />
                    ))
                }
            </div>
        </div>
    )
})
