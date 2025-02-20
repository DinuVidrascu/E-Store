import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../order/Order";
import "./Header.css";

const showOrders = (props) => {
   let summa = 0;
   props.orders.forEach(el => summa += Number.parseFloat(el.price))
   return (
      <div>
         {props.orders.map((el) => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
         ))}
         <p className="summa">The amount: {new Intl.NumberFormat().format(summa)}$</p>
      </div>
   );
};

const showNothing = () => {
   return (
      <div className="empty">
         <h2>The basket is empty</h2>
      </div>
   );
};

const Header = (props) => {
   let [cartOpen, setCartOpen] = useState(false);
   return (
      <header>
         <div>
            <span className="logo">House Staff</span>
            <ul className="nav">
               <li>About us</li>
               <li>Products</li>
               <li>Profile</li>
               <li>Contacts</li>
            </ul>
            <FaShoppingCart
               onClick={() => setCartOpen((cartOpen = !cartOpen))}
               className={`shop-cart-button ${cartOpen && "active"}`}
            />

            {cartOpen && (
               <div className="shop-cart">
                  {props.orders.length > 0 ?
                     showOrders(props) : showNothing()}
               </div>
            )}
         </div>
         <div className="presentation"></div>
      </header>
   );
};

export default Header;
