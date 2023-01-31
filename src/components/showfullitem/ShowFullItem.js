import React, { Component } from "react";
import {HiX} from 'react-icons/hi';

import "./ShowFullItem.css";

export class ShowFullItem extends Component {
   render() {
      return (
         <div className="fullitem">
            <div>
               <HiX className='remove' onClick={() => this.props.onShowItem(this.props.item)}/>
               <img
                  src={"./img/" + this.props.item.img}
                  alt="img"
                  onClick={() => this.props.onShowItem(this.props.item)}
               />
               <h2>{this.props.item.title}</h2>
               <p>{this.props.item.desc}</p>
               <b>{this.props.item.price}$</b>
               <div
                  className="add-to-cart"
                  onClick={() => this.props.onAdd(this.props.item)}
               >
                  +
               </div>
            </div>
         </div>
      );
   }
}

export default ShowFullItem;
