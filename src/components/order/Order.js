import React, { Component } from "react";
import {FaTrash} from 'react-icons/fa';

import "./Order.css";

export class Order extends Component {
   render() {
      return (
         <div className="item">
            <img src={"./img/" + this.props.item.img} alt="img" />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <FaTrash className='delete-icon' onClick={()=>this.props.onDelete(this.props.item.id)}/>
         </div>
      );
   }
}

export default Order;
