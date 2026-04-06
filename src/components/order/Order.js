import React, { Component } from "react";
import { FaTrash } from 'react-icons/fa';
import "./Order.css";

export class Order extends Component {
   render() {
      const { item, onDelete } = this.props;
      return (
         <div className="cart-item fade-in">
            <img src={"/img/" + item.img} alt={item.title} />
            <div className="item-info">
               <h2>{item.title}</h2>
               <div className="qty-controls">
                  <button onClick={() => this.props.onQuantityChange(item.id, -1)}>-</button>
                  <span>{item.qty || 1}</span>
                  <button onClick={() => this.props.onQuantityChange(item.id, 1)}>+</button>
               </div>
               <p className="item-total-price">
                  {new Intl.NumberFormat().format(item.price * (item.qty || 1))}$
               </p>
            </div>
            <div className="delete-container">
               <FaTrash 
                  className='delete-icon' 
                  onClick={() => onDelete(item.id)}
               />
            </div>
         </div>
      );
   }
}

export default Order;
