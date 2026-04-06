import React, { Component } from "react";
import { FaLayerGroup, FaChair, FaTable, FaCouch, FaLightbulb, FaCircle } from "react-icons/fa";
import './Categories.css'

export class Categories extends Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: [
            {
               key: "all",
               name: "All",
               icon: <FaLayerGroup />
            },
            {
               key: "chairs",
               name: "Chairs",
               icon: <FaChair />
            },
            {
               key: "tables",
               name: "Tables",
               icon: <FaTable />
            },
            {
               key: "sofa",
               name: "Sofa",
               icon: <FaCouch />
            },
            {
               key: "light",
               name: "Light",
               icon: <FaLightbulb />
            },
            {
               key: "mirror",
               name: "Mirrors",
               icon: <FaCircle />
            },
         ],
      };
   }
   render() {
      const { activeCategory, chooseCategory } = this.props;
      return (
         <div id="categories" className="categories container fade-in">
            {this.state.categories.map(el => (
               <div
                  key={el.key}
                  className={activeCategory === el.key ? "active" : ""}
                  onClick={() => chooseCategory(el.key)}
               >
                  {el.icon}
                  <span>{el.name}</span>
               </div>
            ))}
         </div>
      );
   }
}

export default Categories;
