import React, { Component } from "react";
import "./Items.css";

export class Item extends Component {
   render() {
      const { item, onShowItem, onAdd } = this.props;
      return (
         <div className="item fade-in">
            <div className="category-badge">{item.category}</div>
            <div className="img-container">
               <img
                  src={"/img/" + item.img}
                  alt={item.title}
                  onClick={() => onShowItem(item)}
               />
            </div>
            <div className="content">
               <h2>{item.title}</h2>
               <p>{item.desc}</p>
               <div className="card-footer">
                  <b>{new Intl.NumberFormat().format(item.price)}</b>
                  <div
                     className="add-to-cart"
                     onClick={() => onAdd(item)}
                  >
                     +
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Item;
