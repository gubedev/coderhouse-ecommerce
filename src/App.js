import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import { CartContextProvider } from "./context"

function App() {
  return (
    <>
      <CartContextProvider>
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
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
