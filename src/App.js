import "./App.css"
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import { 
  LayoutContextProvider, 
  CartContextProvider,
  AuthContextProvider
} from "./context"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Checkout from "./components/Checkout"
import Loader from "./components/Loader"

function App() {
  return (
    <>
      <AuthContextProvider>
        <LayoutContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <main>
              <NavBar />
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
                  <Route path="/signin">
                    <Signin />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/checkout">
                    <Checkout />
                  </Route>
                </Switch>
              </main>
              <Footer />
              <Loader />
              <Signin />
              <Signup />
            </BrowserRouter>
          </CartContextProvider>
        </LayoutContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
