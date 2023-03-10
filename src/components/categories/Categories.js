import React, { Component } from "react";

import './Categories.css'

export class Categories extends Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: [
            {
               key: "all",
               name: "Toate",
            },
            {
               key: "chairs",
               name: "Scaune",
            },
            {
               key: "tables",
               name: "Mese",
            },
            {
               key: "sofa",
               name: "Sofa",
            },
            {
               key: "light",
               name: "lampe",
            },
         ],
      };
   }
   render() {
      return <div className="categories">
        {this.state.categories.map(el =>(
          <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>;
   }
}

export default Categories;
