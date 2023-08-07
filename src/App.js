import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import Categories from "./components/categories/Categories";
import ShowFullItem from "./components/showfullitem/ShowFullItem";
 
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         orders: [],
         currentItems: [],
         items: [
            {
               id: 1,
               title: "Chair grey",
               img: "chair-grey.jpg",
               desc: "lorem ipsum dolor sit amet, consectetur adip",
               category: "chairs",
               price: "49.99",
            },
            {
               id: 3,
               title: "Sofa",
               img: "sofa.jpeg",
               desc: "lorem ipsum dolor sit amet, consectetur adip",
               category: "sofa",
               price: "549.99",
            },
            {
               id: 2,
               title: "Table",
               img: "table.jpg",
               desc: "lorem ipsum dolor sit amet, consectetur adip",
               category: "tables",
               price: "149.99",
            },
            {
               id: 4,
               title: "Light",
               img: "wall-light.jpg",
               desc: "lorem ipsum dolor sit amet, consectetur adip",
               category: "light",
               price: "25",
            },
            {
               id: 5,
               title: "Chair white",
               img: "chair-white.jpg",
               desc: "lorem ipsum dolor sit amet, consectetur adip",
               category: "chairs",
               price: "49.99",
            },
            {
               id: 6,
               title: "Mirror",
               img: "mirror.jpg",
               desc: "lorem ipsum dolor sit amet, consectetur adip",
               category: "mirror",
               price: "149.99",
            },
         ],
         showFullItem: false,
         fullItem: {}
      };

      this.state.currentItems = this.state.items;
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
      this.chooseCategory = this.chooseCategory.bind(this);
      this.onShowItem = this.onShowItem.bind(this);

   }
   render() {
      return (
         <div className="App">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Categories chooseCategory={this.chooseCategory} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
            
            {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item ={this.state.fullItem}/>}
            <Footer />
         </div>
      );
   }

   onShowItem(item){
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
   }

   chooseCategory(category) {
      if (category === "all") {
         this.setState({ currentItems: this.state.items });
         return;
      }
      this.setState({
         currentItems: this.state.items.filter(
            (el) => el.category === category
         ),
      });
   }

   deleteOrder(id) {
      this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
   }

   addToOrder(item) {
      let isInArray = false;
      this.state.orders.forEach((el) => {
         if (el.id === item.id) isInArray = true;
      });
      if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
   }
}

export default App;
