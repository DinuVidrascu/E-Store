import React, { Component } from "react";

import './Categories.css'

export class Categories extends Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: [
            {
               key: "all",
               name: "All",
            },
            {
               key: "chairs",
               name: "Chairs",
            },
            {
               key: "tables",
               name: "Tables",
            },
            {
               key: "sofa",
               name: "Sofa",
            },
            {
               key: "light",
               name: "Light",
            },
            {
               key: "mirror",
               name: "Mirrors",
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
