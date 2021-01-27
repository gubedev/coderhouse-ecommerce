import React, { 
  useContext, 
  useState 
} from "react"
import { 
  LayoutContext,
  AuthContext, 
  CartContext 
} from "../context"
import { NavLink } from "react-router-dom"
import "./Checkout.css"
import { saveOrder } from "../services"

const Checkout = () => {
  const { userlogged } = useContext(AuthContext)
  const { items, removeItem, clear } = useContext(CartContext)
  const { setIsShowingLoader } = useContext(LayoutContext)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [isOrderDone, setIsOrderDone] = useState(false)
  const [orderId, setOrderId] = useState()

  const total = items.reduce(function (prev, cur) {
    return prev + cur.item.price * cur.quantity
  }, 0)

  const handleItemDelete = id => {
    removeItem(id)
  }

  const checkOrderValid = () => {
    return name !== "" && lastName !== "" && phone !== ""
  }

  const handleSaveOrder = () => {
    const order = {
      buyer: {
        name,
        lastName,
        phone,
        email: userlogged,
      },
      items,
      total,
    }

    setIsShowingLoader(true)

    saveOrder(order)
    .then(response => {
      setIsOrderDone(true)
      setOrderId(response.id)
      setIsShowingLoader(false)
      clear()
    })
    .catch(
      setIsShowingLoader(false)
    )
  }

  return (
    <>
      { (items.length === 0) || isOrderDone ? (
        isOrderDone ? (
          <div className="container bg-white flex-col mt-1 pl-1 pb-1 rounded">
            <div className="pb-1 pt-1">
              <h3>La orden {orderId}</h3>
              <h3>fue generada exitosamente!</h3>
            </div>
            <NavLink to="/" exact>
              <span>Seguir de compras</span>
            </NavLink>
          </div>
        ) : (
          <div className="container pt-2">
            <div className="pb-1">
              <h1 className="text-red"> No hay productos seleccionados...</h1>
            </div>
            <NavLink to="/" exact>
              <span>Seguir de compras</span>
            </NavLink>
          </div>
        )
      ) : (
        <div className="checkout container rounded mb-1">
          <div className="shopping-cart">
            <div className="flex pl-1 pr-1 pt-1 pb-1 w-full shopping-cart__header">
              <div className="text-gray text-weight-600">Carrito de compras</div>
              <div className="text-gray text-weight-600">Items {items.length}</div>
            </div>
            <div className="flex pl-1 pt-1 pr-1 pb-1 w-full">
              <div className="w-2/5">Detalle</div>
              <div className="text-right w-1/5">Cantidad</div>
              <div className="text-right w-1/5">Precio</div>
              <div className="text-right w-1/5">Total</div>
            </div>
            <div>
              <ul>
                {items.map(cartItem => {
                  return (
                    <li key={cartItem.item.id}>
                      <div className="flex pl-1 pt-1 pr-1 pb-1 w-full">
                        <div className="w-2/5">
                          <div className="flex w-full">
                            <div className="w-2/5">
                              <img src={cartItem.item.pictureUrl} alt={cartItem.item.title} />
                            </div>
                            <div className="w-3/5 pl-2 flex flex-col">
                              <div>{cartItem.item.title}</div>
                              <div className="pt-2">
                                <span 
                                  style={{ cursor: "pointer" }} 
                                  onClick={() => handleItemDelete(cartItem.item.id)}
                                  className="text-red"
                                >
                                  Eliminar
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right w-1/5">{cartItem.quantity}</div>
                        <div className="text-right w-1/5">$ { cartItem.item.price }</div>
                        <div className="text-right w-1/5">$ { (cartItem.quantity * cartItem.item.price).toFixed(2) }</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="order-summary">
            <div className="order-summary__header pl-1 pt-1 pb-1 text-gray text-weight-600">Resúmen</div>
            <div className="flex pl-1 pt-1 pr-1 pb-1">
              <div 
                className="text-gray text-weight-600"
              >Items {items.length}</div>
              <div 
                className="text-gray text-weight-600"
              >Total $ {total.toFixed(2)}</div>
            </div>
            {userlogged && (
              <>
                <div className="flex pl-1 pt-1 pr-1 pb-1 w-full logged-as">
                  <div>Comprar como:</div>
                  <div>{userlogged}</div>
                </div>
                <div className="w-full p-1">
                  <input 
                    type="text" 
                    className="w-full p-1" 
                    placeholder="Nombre" 
                    onChange={e => setName(e.target.value)} 
                  />
                </div>
                <div className="w-full p-1">
                  <input 
                    type="text" 
                    className="w-full p-1" 
                    placeholder="Apellido" 
                    onChange={e => setLastName(e.target.value)} 
                  />
                </div>
                <div className="w-full p-1">
                  <input 
                    type="text" 
                    className="w-full p-1" 
                    placeholder="Teléfono" 
                    onChange={e => setPhone(e.target.value)} 
                  />
                </div>
                {checkOrderValid() === true && !isOrderDone && (
                  <div className="pt-1 pl-1 pb-1">
                    <button className="btn-success" onClick={handleSaveOrder}>
                      Terminar compra
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout
