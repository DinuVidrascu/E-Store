import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../order/Order";
import "./Header.css";

const showOrders = (props) => {
   let summa = 0;
   props.orders.forEach(el => summa += Number.parseFloat(el.price) * (el.qty || 1))
   return (
      <div>
         <div className="items-list">
            {props.orders.map((el) => (
               <Order
                  onDelete={props.onDelete}
                  onQuantityChange={props.onQuantityChange}
                  key={el.id}
                  item={el}
               />
            ))}
         </div>
         <p className="summa">Total Amount: <span>{new Intl.NumberFormat().format(summa)}$</span></p>
         <button className="checkout-btn" onClick={props.onCheckout}>Go to Checkout</button>
      </div>
   );
};

const showNothing = () => {
   return (
      <div className="empty">
         <h2>Your basket is empty</h2>
      </div>
   );
};

const Header = (props) => {
   let [cartOpen, setCartOpen] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const handleCheckout = () => {
      setCartOpen(false);
      props.onCheckout();
   };

   const handleNavigation = (sectionId) => {
      if (location.pathname !== '/') {
         // Dacă nu suntem pe pagina principală, navigăm întâi la home
         navigate('/');
         // Așteptăm puțin pentru ca pagina să se încarce, apoi facem scroll
         setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
            }
         }, 100);
      } else {
         // Dacă suntem deja pe pagina principală, facem direct scroll
         const element = document.getElementById(sectionId);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   };

   return (
      <>
         <header className="top-nav">
            <div className="nav-container">
               <span className="logo" onClick={() => {
                  if (location.pathname !== '/') {
                     navigate('/');
                  } else {
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
               }}>
                  House Staff
               </span>
               <div className="search-box">
                  <input
                     type="text"
                     placeholder="Search furniture..."
                     onChange={(e) => props.onSearch(e.target.value)}
                  />
               </div>
               <ul className="nav">
                  <li><button onClick={() => handleNavigation('contacts')}>About us</button></li>
                  <li><button onClick={() => handleNavigation('products')}>Products</button></li>
                  <li><button onClick={() => handleNavigation('categories')}>Categories</button></li>
                  <li><button onClick={() => handleNavigation('contacts')}>Contacts</button></li>
               </ul>
               <div className={`shop-cart-button ${cartOpen && "active"}`} onClick={() => setCartOpen(!cartOpen)}>
                  <FaShoppingCart />
                  {props.orders.length > 0 && <span className="cart-count">{props.orders.length}</span>}
               </div>

               {cartOpen && (
                  <div className="shop-cart glass-panel">
                     {props.orders.length > 0 ?
                        showOrders({ ...props, onCheckout: handleCheckout }) : showNothing()}
                  </div>
               )}
            </div>
         </header>

         <div className="hero fade-in">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
               <h1>Redefine Your Space</h1>
               <p>Exclusive premium collection of designer furniture for your home.</p>
               <button className="hero-btn" onClick={() => handleNavigation('products')}>
                  Explore Now
               </button>
            </div>
         </div>
      </>
   );
};

export default Header;
