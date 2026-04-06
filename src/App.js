import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import Categories from "./components/categories/Categories";
import ShowFullItem from "./components/showfullitem/ShowFullItem";
import Checkout from "./components/checkout/Checkout";
import TermsOfUse from "./components/terms/TermsOfUse";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";

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
               title: "Grey Velvet Chair",
               img: "chair-grey.jpg",
               desc: "Modern and comfortable grey velvet chair with sturdy metal legs.",
               category: "chairs",
               price: "49.99",
            },
            {
               id: 3,
               title: "Contemporary Sofa",
               img: "sofa.jpeg",
               desc: "Minimalist grey sofa for a cozy and stylish living room.",
               category: "sofa",
               price: "549.99",
            },
            {
               id: 2,
               title: "Wooden Dining Table",
               img: "table.jpg",
               desc: "Handcrafted wooden dining table with a natural finish.",
               category: "tables",
               price: "149.99",
            },
            {
               id: 4,
               title: "Round Wall Light",
               img: "wall-light.jpg",
               desc: "Modern golden wall light with a soft and warm glow.",
               category: "light",
               price: "25",
            },
            {
               id: 5,
               title: "White Minimalist Chair",
               img: "chair-white.jpg",
               desc: "Clean and simple white chair for any modern workspace or dining area.",
               category: "chairs",
               price: "49.99",
            },
            {
               id: 6,
               title: "Round Wall Mirror",
               img: "mirror.jpg",
               desc: "Elegant round wall mirror with a thin black metal frame.",
               category: "mirror",
               price: "149.99",
            },
         ],
         showFullItem: false,
         fullItem: {},
         activeCategory: 'all',
         searchQuery: '',
         notification: { show: false, message: '' },
         showCheckout: false,
      };

      this.state.currentItems = this.state.items;
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
      this.chooseCategory = this.chooseCategory.bind(this);
      this.onShowItem = this.onShowItem.bind(this);
      this.changeQuantity = this.changeQuantity.bind(this);
      this.onSearch = this.onSearch.bind(this);
      this.toggleCheckout = this.toggleCheckout.bind(this);
      this.clearOrders = this.clearOrders.bind(this);
   }

   componentDidMount() {
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
         this.setState({ orders: JSON.parse(savedOrders) });
      }
      this.setState({ currentItems: this.state.items });

      // Listen for category selection from footer
      this.handleSelectCategory = (e) => {
         this.chooseCategory(e.detail.category);
      };
      window.addEventListener('selectCategory', this.handleSelectCategory);
   }

   componentWillUnmount() {
      if (this.handleSelectCategory) {
         window.removeEventListener('selectCategory', this.handleSelectCategory);
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.orders !== this.state.orders) {
         localStorage.setItem('orders', JSON.stringify(this.state.orders));
      }
   }

   toggleCheckout(value = false) {
      this.setState({ showCheckout: value });
   }

   clearOrders() {
      this.setState({ orders: [], showCheckout: false });
   }

   render() {
      return (
         <div className="App">
            <Header
               orders={this.state.orders}
               onDelete={this.deleteOrder}
               onQuantityChange={this.changeQuantity}
               onSearch={this.onSearch}
               onCheckout={() => this.toggleCheckout(true)}
            />
            <Routes>
               <Route path="/" element={
                  <>
                     <Categories chooseCategory={this.chooseCategory} activeCategory={this.state.activeCategory} />
                     <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
                     {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
                     {this.state.notification.show && (
                        <div className="toast-notification">
                           {this.state.notification.message}
                        </div>
                     )}

                     {/* About Us Section */}
                     <section id="about" className="about-section container fade-in">
                        <div className="section-header">
                           <h2>About Us</h2>
                        </div>
                        <div className="about-content">
                           <div className="about-text">
                              <h3>Bringing Modern Design to Your Home</h3>
                              <p>House Staff is your premier destination for contemporary furniture that combines style, comfort, and functionality. We believe that your home should reflect your personality and provide a sanctuary where you can relax and recharge.</p>
                              <p>Our curated collection features carefully selected pieces from renowned designers and emerging talents, ensuring that every item meets our high standards for quality and craftsmanship.</p>
                           </div>
                           <div className="about-stats">
                              <div className="stat">
                                 <h4>500+</h4>
                                 <p>Happy Customers</p>
                              </div>
                              <div className="stat">
                                 <h4>100+</h4>
                                 <p>Quality Products</p>
                              </div>
                              <div className="stat">
                                 <h4>5 Years</h4>
                                 <p>Experience</p>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* Contact Us Section */}
                     <section id="contact" className="contact-section container fade-in">
                        <div className="section-header">
                           <h2>Contact Us</h2>
                        </div>
                        <div className="contact-content">
                           <div className="contact-info">
                              <div className="contact-item">
                                 <h4>📍 Address</h4>
                                 <p>123 Modern Street<br />Design District<br />New York, NY 10001</p>
                              </div>
                              <div className="contact-item">
                                 <h4>📞 Phone</h4>
                                 <p>+1 (555) 123-4567</p>
                              </div>
                              <div className="contact-item">
                                 <h4>✉️ Email</h4>
                                 <p>hello@housestaff.com</p>
                              </div>
                              <div className="contact-item">
                                 <h4>🕒 Hours</h4>
                                 <p>Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 4PM<br />Sun: Closed</p>
                              </div>
                           </div>
                           <div className="contact-form">
                              <h3>Send us a message</h3>
                              <form>
                                 <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                 </div>
                                 <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                 </div>
                                 <div className="form-group">
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                 </div>
                                 <button type="submit" className="btn-primary">Send Message</button>
                              </form>
                           </div>
                        </div>
                     </section>
                  </>
               } />
               <Route path="/terms" element={<TermsOfUse />} />
               <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            {this.state.showCheckout && (
               <Checkout
                  orders={this.state.orders}
                  onClose={() => this.toggleCheckout(false)}
                  onComplete={this.clearOrders}
               />
            )}
            <Footer />
         </div>
      );
   }

   onShowItem(item) {
      this.setState({ fullItem: item })
      this.setState({ showFullItem: !this.state.showFullItem })
   }

   chooseCategory(category) {
      this.setState({ activeCategory: category });
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
      const newOrders = this.state.orders.map((el) => {
         if (el.id === item.id) {
            isInArray = true;
            return { ...el, qty: (el.qty || 1) + 1 };
         }
         return el;
      });

      if (isInArray) {
         this.setState({ orders: newOrders });
      } else {
         this.setState({ orders: [...this.state.orders, { ...item, qty: 1 }] });
      }

      // Show notification
      this.setState({
         notification: { show: true, message: `Added ${item.title} to cart!` }
      });

      setTimeout(() => {
         this.setState({ notification: { show: false, message: '' } });
      }, 3000);
   }

   changeQuantity(id, delta) {
      const newOrders = this.state.orders.map(el => {
         if (el.id === id) {
            const newQty = (el.qty || 1) + delta;
            return { ...el, qty: newQty < 1 ? 1 : newQty };
         }
         return el;
      }).filter(el => el.qty > 0);
      this.setState({ orders: newOrders });
   }

   onSearch(query) {
      this.setState({ searchQuery: query });
      const filtered = this.state.items.filter(item =>
         item.title.toLowerCase().includes(query.toLowerCase()) ||
         item.desc.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ currentItems: filtered });
   }
}

export default App;
