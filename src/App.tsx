import * as React from "react"
import { Navbar } from "./components/navbar"
import { ListDisplay } from "./components/ListDisplay"
import { ListStore } from "./ListStore"

function App() {
  const store: ListStore = new ListStore()
  return (
      <div>
        <Navbar store={store}/>
        <ListDisplay store={store}/>
      </div>
  );
}
export default App;
