import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact>
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
