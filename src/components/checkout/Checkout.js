import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ orders, onClose, onComplete }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", address: "", card: "" });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const [submitted, setSubmitted] = useState(false);

    const handleBack = () => {
        if (onClose) {
            onClose();
            return;
        }
        navigate("/");
    };

    const handleCloseAfterSubmit = () => {
        if (onComplete) {
            onComplete();
            return;
        }
        if (onClose) {
            onClose();
            return;
        }
        navigate("/");
    };

    const total = orders.reduce(
        (sum, item) => sum + parseFloat(item.price) * (item.qty || 1),
        0
    );

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.name || !form.email || !form.address || !form.card) {
            return;
        }

        setSubmitted(true);
        setTimeout(() => {
            handleCloseAfterSubmit();
        }, 2500);
    };

    return (
        <div className="checkout-overlay fade-in">
            <div className="checkout-page checkout-modal container">
                <button className="checkout-close" onClick={handleBack}>×</button>
                <h2>Checkout</h2>
                {orders.length === 0 ? (
                    <div className="empty-checkout">
                        <p>Your cart is empty. Add items before checking out.</p>
                        <button className="checkout-back" onClick={handleBack}>Return to shop</button>
                    </div>
                ) : (
                    <div className="checkout-layout">
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-list">
                                {orders.map((item) => (
                                    <div key={item.id} className="summary-item">
                                        <span>{item.title} x {item.qty || 1}</span>
                                        <span>{new Intl.NumberFormat().format(parseFloat(item.price) * (item.qty || 1))}$</span>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <strong>{new Intl.NumberFormat().format(total)}$</strong>
                            </div>
                        </div>

                        <div className="payment-form">
                            <h3>Payment Details</h3>
                            {submitted ? (
                                <div className="success-box">
                                    <h4>Payment received!</h4>
                                    <p>Your order has been placed successfully.</p>
                                    <button onClick={handleBack}>Continue shopping</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Full Name
                                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                                    </label>
                                    <label>
                                        Email
                                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                                    </label>
                                    <label>
                                        Delivery Address
                                        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Street, City, Country" />
                                    </label>
                                    <label>
                                        Card Number
                                        <input type="text" name="card" value={form.card} onChange={handleChange} placeholder="1234 5678 9012 3456" />
                                    </label>
                                    <button type="submit" className="checkout-submit">
                                        Pay {new Intl.NumberFormat().format(total)}$
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
