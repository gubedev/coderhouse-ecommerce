import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return <>
    <NavBar />
    <ItemListContainer greeting={"Item list container works !!"} />
  </>
}

export default App
