import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./TermsOfUse.css";

const TermsOfUse = () => {
    useEffect(() => {
        const header = document.querySelector('.top-nav');
        const target = document.getElementById('terms-top') || document.querySelector('.terms-page .page-header');
        const headerHeight = header ? header.offsetHeight : 80;
        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="terms-page container fade-in" id="terms-top">
            <div className="page-header">
                <h1>Terms of Use</h1>
                <p>Last updated: April 6, 2026</p>
            </div>

            <div className="terms-content">
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using House Staff's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                        If you do not agree to abide by the above, please do not use this service.
                    </p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials on House Staff's website for personal, non-commercial transitory viewing only.
                        This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display;</li>
                        <li>attempt to decompile or reverse engineer any software contained on House Staff's website;</li>
                        <li>remove any copyright or other proprietary notations from the materials.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Product Information</h2>
                    <p>
                        We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free.
                        If a product offered by House Staff is not as described, your sole remedy is to return it in unused condition.
                    </p>
                </section>

                <section>
                    <h2>4. Pricing and Payment</h2>
                    <p>
                        All prices are subject to change without notice. We reserve the right to refuse or cancel any orders placed for products listed at the incorrect price.
                        Payment must be received prior to the acceptance of an order.
                    </p>
                </section>

                <section>
                    <h2>5. Shipping and Delivery</h2>
                    <p>
                        We will make every effort to deliver products within the estimated timeframe, however, delivery dates are estimates only and we are not liable for delays.
                        Risk of loss and title for items purchased pass to the buyer upon delivery to the carrier.
                    </p>
                </section>

                <section>
                    <h2>6. Returns and Refunds</h2>
                    <p>
                        Items may be returned within 30 days of purchase for a full refund, provided they are in original condition and packaging.
                        Return shipping costs are the responsibility of the customer unless the item was damaged or defective.
                    </p>
                </section>

                <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        In no event shall House Staff or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                        or due to business interruption) arising out of the use or inability to use the materials on House Staff's website.
                    </p>
                </section>

                <section>
                    <h2>8. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction,
                        and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                    </p>
                </section>

                <section>
                    <h2>9. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                        If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                </section>

                <section>
                    <h2>10. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms of Use, please contact us through our website or customer service channels.
                    </p>
                </section>
            </div>

            <div className="page-navigation">
                <Link to="/" className="nav-link">← Back to Shop</Link>
            </div>
        </div>
    );
};

export default TermsOfUse;