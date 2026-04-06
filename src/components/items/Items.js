import React, { Component } from "react";
import Item from "./Item";
import './Items.css'

export class Items extends Component {
   render() {
      return (
         <main id="products" className="container fade-in">
            <h2 className="section-title">Discover Our Premium Collection</h2>
            <p className="sub-title">Elevate your home with our carefully curated selection of contemporary design furniture and accessory pieces.</p>
            <div className="items-container">
               {this.props.items.map((el) => (
                  <Item
                     onShowItem={this.props.onShowItem}
                     key={el.id}
                     item={el}
                     onAdd={this.props.onAdd}
                  />
               ))}
            </div>
         </main>
      );
   }
}

export default Items;
