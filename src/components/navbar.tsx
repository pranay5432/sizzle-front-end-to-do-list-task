import * as React from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react'
import { ListStore } from "../ListStore"

interface NavbarProps {
    store: ListStore
}

export const Navbar = observer(function(props: NavbarProps) {
  const [value, setValue] = useState("")
  const prepareAddList = (e: any) => {
      e.preventDefault()
      props.store.addItem(value)
      setValue("")
  }

  return (
    <div className="container mt-3">
      <h1 className="title">List App</h1>
      <form onSubmit={prepareAddList} className="form-group">
          <div className="row ml-lg-2">
            <input className="form-control-lg col-12 col-lg-9 col-sm-12 mr-3 border border-secondary" value={value} type="text" onChange={(e) => setValue(e.target.value)} placeholder="Enter list"/>
            <button className="col-lg-2 col-5 col-sm-5 mt-2 mt-lg-0 mt-sm-2 btn btn-lg btn-success font-weight-bold">
              Add to List
            </button>
          </div>
      </form>
     </div>
    
  )
})
