import React, { Component } from "react";
import { HiX } from 'react-icons/hi';
import "./ShowFullItem.css";

export class ShowFullItem extends Component {
   render() {
      const { item, onShowItem, onAdd } = this.props;
      return (
         <div className="full-item-overlay fade-in">
            <div className="full-item-modal">
               <div className="close-modal" onClick={() => onShowItem(item)}>
                  <HiX />
               </div>
               
               <div className="img-side">
                  <img
                     src={"/img/" + item.img}
                     alt={item.title}
                  />
               </div>
               
               <div className="content-side">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <b>{new Intl.NumberFormat().format(item.price)}</b>
                  <button
                     className="add-to-cart-btn"
                     onClick={() => {
                        onAdd(item);
                        onShowItem(item);
                     }}
                  >
                     Add to Basket
                  </button>
               </div>
            </div>
         </div>
      );
   }
}

export default ShowFullItem;
